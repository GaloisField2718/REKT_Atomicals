import React, { useState, useEffect } from 'react';
import AtomicalsCard from './CardComp/AtomicalFTCard';
import LoadingScreen from './components/LoadingScreen';

function AtomicalsSearch() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('data');
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const RETRY_DELAY = 10000; // 5 seconds. Adjust as needed.
    const MAX_RETRIES = 10; // Adjust as needed.
    let retryCount = 0;
    const atomicalAliasOrId = myParam
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
                method: "blockchain.atomicals.get",
                params: [atomicalAliasOrId] // Ensure this value is available
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
            // Optionally, you can attempt to reconnect when a connection is closed.
            // This depends on your use case.
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

        <div>
            {isLoading ? <LoadingScreen /> :
                <AtomicalsCard data={data} />

            }
        </div>
    );
}
export default AtomicalsSearch;
