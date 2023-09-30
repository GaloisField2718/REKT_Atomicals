import React from 'react';
import { Buffer } from 'buffer';
import { Card, CardMedia, CardContent, Typography, Stack } from '@mui/material';

function AtomicalsCard({ data }) {
    const fields = data.result.result.mint_data.fields;
    const imageKey = Object.keys(fields).find(key => key.endsWith('.jpg') || key.endsWith('.png'));
    const desiredData = fields[imageKey].$b.$d;

    const hexString = desiredData;
    const imageURL = hexString ? hexToDataURL(hexString, 'image/jpeg') : '';

    function hexToDataURL(hexString, mimeType = 'image/png') {
        const bytes = Buffer.from(hexString, 'hex');
        const base64 = bytes.toString('base64');
        return `data:${mimeType};base64,${base64}`;
    }
    console.log(data?.result?.result?.atomical_number);
    return (
        <Card
            sx={{
                maxWidth: 345,
                m: 2, // margin
                boxShadow: 3
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
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        {data?.result?.result?.$ticker}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {data?.result?.result?.$max_supply}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        #{data?.result?.result?.atomical_number}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default AtomicalsCard;
