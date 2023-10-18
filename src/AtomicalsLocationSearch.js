import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Dashboard from './components/Dashboard';
import { Stack } from '@mui/material';

function AtomicalsLocationSearch() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('data');
    const [isLoading, setIsLoading] = useState(true);
    const [properData, setproperData] = useState(null)
    const RETRY_DELAY = 10000;
    const MAX_RETRIES = 10;
    let retryCount = 0;
    const atomicalAliasOrId = myParam;

    const connectToWebSocket = () => {
        if (properData !== null) {
            return
        }

        if (retryCount >= MAX_RETRIES) {
            console.error('Max retries reached. Stopping connection attempts.');
            return;
        }

        const connection = new WebSocket('wss://electrumx.atomicals.xyz:50012');

        connection.onopen = function (event) {
            retryCount = 0;
            setTimeout(() => {
                setIsLoading(false);
            }, 1300);
            const payload = {
                id: 1,
                method: "blockchain.atomicals.get_location",
                params: [atomicalAliasOrId]
            };
            connection.send(JSON.stringify(payload));
        };

        connection.onerror = function (error) {
            console.error('WebSocket Connection Error:', error);
            retryCount++;
            setTimeout(connectToWebSocket, RETRY_DELAY);
        };

        connection.onmessage = function (event) {
            const parsedData = JSON.parse(event.data);
            setproperData(parsedData)
            console.log(parsedData); // Logging the received data
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
    }, []); // Removed connectToWebSocket() from the dependency array to avoid unnecessary re-renders

    return (
        <Stack width='100%'>
            {isLoading ? <LoadingScreen /> : <Dashboard data={properData} />}
        </Stack>
    );
}

export default AtomicalsLocationSearch;
