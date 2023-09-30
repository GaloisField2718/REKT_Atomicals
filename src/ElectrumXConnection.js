import React, { useState, useEffect } from 'react';
import { Buffer } from 'buffer';
function ElectrumXConnection() {
    const [connection, setConnection] = useState(null);
    const [atomicalAliasOrId, setAtomicalAliasOrId] = useState("");
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const ws = new WebSocket('wss://electrumx.atomicals.xyz:50012');

        ws.onopen = () => {
            console.log('WebSocket is connected.');
        };

        ws.onmessage = (event) => {
            console.log('Received message:', event.data);
            const data = JSON.parse(event.data);
            if (data && data.result && data.result.atomicals_id) {
                setResponse(data.result.atomicals_id);  // or you can set the entire `data` object if needed
            }
        };


        ws.onclose = () => {
            console.log('WebSocket is closed.');
            setConnection(null);
        };

        setConnection(ws);

        return () => {
            if (ws) ws.close();
        };
    }, []);

    function handleSearch() {
        if (!connection) {
            console.error("WebSocket is not connected.");
            return;
        }

        const payload = {
            id: 1,
            method: "blockchain.atomicals.get",
            params: [atomicalAliasOrId]
        };
        connection.send(JSON.stringify(payload));
    }

    const hexString = "89504e470d0a1a0a0000000d49484452000000ed000000b004030000001173f4950000001e504c54450000000606061212123434344d4d4d838383b2b2b2d4d4d4f2f2f2fefefe00c96d4d000003c54944415478daed9a3d73d34010867765e27a2f1e5ccb816128992143549a81023a180aa22e165f938ea481d40c90ab21caddbf65572729b1ecd0ad92629f191752f3eabdbdbddd950c86611886611886611886611886611886d1e1e04e80300e389ad21dc111b86b10dc1a388636c283976b3cdd1b439699c6757e7f7a3e8af2ba6e10e577390182b2fad0ef398b7f04a4b1751b3e90b2ea0dbae1add33e50b6e98670996b2fb4e86e127e64b7e037467fb9540e71a3fbade7bbe74bf9fd0020cd1837ba4be8d8dbffd26471b87c0240eaba0e1300f9e47db27caaafeb970409499fecf05c0cd7ba05622ade966ba562f72c360fa39a4aebf145fe51d6dc0ba7a8b8cc49f7aa043970ac7ecc76c385a6ecc0af4044cdcdcb85761ef925ac8129c26f348f8ee47720e05e7b7e9a535064b09f05026c9ee68fe2326ff18b40d944ce8e0b5024c5970686e998857f2b86b7f53b1c5648021c72d023e5ef9a2cebbac7e971f410dd3aa7a1e147b2fc6f400d12ddd5e678b613193ddd0ca621d6e480803674fd91dec6a279f4270834ac01f72273046ae03cd40e60a3c63f54d6a5a9afd82be2b39cc6f40bf33a27169ef96a735fad408fe957ca81b088f56223addf821ab4c37681667ee06eae9cbfd0f41750b06eede8eadc48e79566411219b6cb5498840932286524cd557591a8105d4ea85e878e6500576dec5878721e055fb9ae30dc933bba8d1d802b2223868952dd4ffdc65f5d5db19be87298f0b55c9d28eb16b1a376ed3e3bf3528e34e7058049f4b1c5af92d23c48ff9c6bca3a7ae545857f4c8a30dd97cb0bcdf90871f63d0a1f7869bdf715105186a50ca2a8d8b71314cdb45be74532bc404036cc7e97aaefce66de3781cd2667d187146131ec7fa2e6d80d8d4d5f03e2416cc6eddc01c262279e384dbb54ca960a2b84dd896f739800110f17aaef19f23204b62b025484764b3b56dc43043dc308877d63e138c2428540a9d1d313462c25a60442b7a549317faec5d78755eb4b22ecd9bd9acd1e84d2c75fbdbf36c20bbdfdd481ecf7c8756568d7a7c643dd2f50e9ebbcbfe01c3e9778ab56842ebeabee3c24208eb0c458b3716e29ebfe5cca08e9718ab0ba5f2c57e0fa0bc0d959d49e14129f610d3a688a71adfec5eee9d656da57ba6f63191a081fa4083be51c76701d2908bea9c3d5c85fc2a9abc3ba87f4462fd3e77005238219700e8b6eac55177ae35b4d5f87fd4a75a1b7901fb47558b1cfb9b1c7648e94e7d02188451a0f35df8b6ec161db698d1d6187fbfc178317fb2ff41b9eeb502337c2b7f61bfe3c93ebf5b1ffc38dbc9d0dc3300cc3300cc3300cc3300cc3300cc300f80782d8dfb2412ed6fa0000000049454e44ae426082"; // Replace this with your hex data.
    const dataURL = hexToDataURL(hexString, 'image/jpeg'); // Use the appropriate MIME type

    function hexToDataURL(hexString, mimeType = 'image/png') {
        const bytes = Buffer.from(hexString, 'hex');
        const base64 = bytes.toString('base64');
        return `data:${mimeType};base64,${base64}`;
    }




    return (
        <div>
            <h1>ElectrumX WebSocket Connection</h1>

            <input
                type="text"
                value={atomicalAliasOrId}
                onChange={e => setAtomicalAliasOrId(e.target.value)}
                placeholder="Enter Atomical Alias or ID"
            />
            <button onClick={handleSearch}>Search</button>

            {response && <pre>{JSON.stringify(JSON.parse(response), null, 2)}</pre>}
            {response && <img src={dataURL} alt="Converted from Hex" />}
        </div>
    );
}

export default ElectrumXConnection;
