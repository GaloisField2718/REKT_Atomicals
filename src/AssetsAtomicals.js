import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import { Link } from 'react-router-dom';
import { List, ListItem, Stack, Typography } from '@mui/material';
// You may want to import another card or component to display your results
// e.g. import AssetsCard from './CardComp/AssetsCard';

function AssetsAtomicals() {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const RETRY_DELAY = 10000;
    const MAX_RETRIES = 10;
    let retryCount = 0;

    const connectToWebSocket = () => {
        if (retryCount >= MAX_RETRIES) {
            console.error('Max retries reached. Stopping connection attempts.');
            return;
        }

        const connection = new WebSocket('wss://electrumx.atomicals.xyz:50012');

        connection.onopen = function (event) {
            retryCount = 0; // Reset retry count on successful connection
            setTimeout(() => {
                setIsLoading(false);
            }, 1300);
            const payload = {
                id: 1,
                method: "blockchain.atomicals.find_tickers", // Adjusted method
                params: [] // Adjust parameters if necessary
            };
            connection.send(JSON.stringify(payload));
        };

        connection.onerror = function (error) {
            console.error('WebSocket Connection Error:', error);
            retryCount++;
            setTimeout(connectToWebSocket, RETRY_DELAY); // Retry after a delay
        };

        connection.onmessage = function (event) {
            const parsedData = JSON.parse(event.data);
            setData(parsedData);
        };

        connection.onclose = function (event) {
            if (!event.wasClean && retryCount < MAX_RETRIES) {
                console.warn('Connection closed unexpectedly. Retrying...');
                retryCount++;
                setTimeout(connectToWebSocket, RETRY_DELAY);
            }
        };
    };

    useEffect(() => {
        connectToWebSocket();
        return () => {
            // Cleanup logic if needed
        };
    }, []);

    return (
        <Stack width='100%'>
            {isLoading ? <LoadingScreen /> :
                <List sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                    {data.result && data.result.result.map(item => (
                        <ListItem sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '10rem',
                            border: '1px solid grey',     // Solid grey border
                            backgroundColor: '#fff',
                            ":hover": {
                                backgroundColor: '#1976d25e'
                            }  // Example background color (light grey)
                        }} key={item.atomical_id}>
                            <Link
                                to={`/token?data=${item.atomical_id}`}>
                                <Typography fontWeight={600} textTransform={'uppercase'}>
                                    {item.ticker}
                                </Typography>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            }
        </Stack>
    );
}
export default AssetsAtomicals;
