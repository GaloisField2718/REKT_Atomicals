import React from 'react';
import { Buffer } from 'buffer';
import { Card, CardMedia, CardContent, Typography, Stack, Divider } from '@mui/material';

function AtomicalsCard({ data }) {
    const fields = data.result.result.mint_data.fields;
    const imageKey = Object.keys(fields).find(key => key.endsWith('.jpg') || key.endsWith('.png'));
    const desiredData = fields[imageKey].$b.$d;

    const hexString = desiredData;
    const imageURL = hexString ? hexToDataURL(hexString, 'image/jpeg') : '';
    const dataC = data.result

    function hexToDataURL(hexString, mimeType = 'image/png') {
        const bytes = Buffer.from(hexString, 'hex');
        const base64 = bytes.toString('base64');
        return `data:${mimeType};base64,${base64}`;
    }
    function truncateText(input, maxLength) {
        if (input && input.length > maxLength) {
            return `${input.substring(0, maxLength - 3)}...`;
        }
        return input;
    }


    return (
        <Card
            sx={{
                maxWidth: 345,
                width: 345,
                m: 2,
                boxShadow: 3, borderTopLeftRadius: '16px', borderTopRightRadius: '16px'
            }}
        >
            <CardMedia
                component="img"
                alt="Atomical Image"
                height="140"
                image={imageURL}
                title="Atomical Image"
                sx={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
            />
            <CardContent>

                <Stack spacing={1}>
                    <Stack display='flex' alignItems={'center'}>
                        <Typography variant="h5" fontWeight={700} textTransform='uppercase' component="div" >
                            {dataC?.result?.$ticker}
                        </Typography>
                    </Stack>

                    <Divider />


                    <Stack display='flex' flexDirection='row' alignItems={'center'} justifyContent='space-between'>
                        <Typography variant="body" color="textSecondary">
                            Atomical number :
                        </Typography>
                        <Typography variant="body" >
                            #{dataC?.result?.atomical_number}
                        </Typography>
                    </Stack>

                    <Stack display='flex' flexDirection='row' alignItems={'center'} justifyContent='space-between'>
                        <Typography variant="body" color="textSecondary">
                            commit bitwork :
                        </Typography>
                        <Typography variant="body" >
                            {dataC?.result?.$bitwork?.bitworkc}
                        </Typography>
                    </Stack>

                    <Stack display='flex' flexDirection='row' alignItems={'center'} justifyContent='space-between'>
                        <Typography variant="body" color="textSecondary">
                            total supply :
                        </Typography>
                        <Typography variant="body" >
                            {dataC?.result?.$max_supply}
                        </Typography>
                    </Stack>

                    <Divider />

                    <Typography color="textSecondary" variant="body2">
                        Atomical ID:
                    </Typography>

                    <Typography variant="caption">
                        {truncateText(dataC?.result?.atomical_id, 33)}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                        Atomical Ref:
                    </Typography>
                    <Typography variant="caption">
                        {truncateText(dataC?.result?.atomical_ref, 33)}
                    </Typography>
                    <Divider />

                    <Typography color="textSecondary" variant="body2">
                        Max Mints: {dataC?.result?.$max_mints}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                        Mint Amount: {dataC?.result?.$mint_amount}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                        Ticker Request Status: {dataC?.result?.$request_ticker_status?.status}
                    </Typography>

                    <Typography color="textSecondary" variant="body2">
                        Type: {dataC?.result?.type}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                        Subtype: {dataC?.result?.subtype}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default AtomicalsCard;
