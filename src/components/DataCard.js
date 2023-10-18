import React from 'react';
import { Card, CardContent, Typography, CircularProgress, Box, Divider } from '@mui/material';



function DataCard({ globalData }) {
    const data = globalData;

    // Calculate the minting progress as a percentage
    const mintProgress = (data.location_counts / data.$max_mints) * 100;

    return (
        <Card variant="outlined" sx={{ background: '#f4f4f4' }}>
            <CardContent>
                <Typography variant="h5" component="div" color="primary" gutterBottom>
                    Minting Progress
                </Typography>

                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginBottom={3}>
                    <Box position="relative" display="inline-flex" >
                        <CircularProgress
                            variant="determinate"
                            value={mintProgress}
                            size={80}
                            thickness={5}
                            sx={{
                                color: '#2196f3',
                                '&.MuiCircularProgress-circle': {
                                    // Set the circle's background color here
                                    backgroundColor: '#000',
                                },
                            }}
                        />
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography variant="caption" component="div" color="textSecondary">
                                {`${Math.round(mintProgress)}%`}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Divider variant="middle" sx={{ marginY: 2 }} />

                <Typography variant="body1" color="textPrimary" gutterBottom>
                    <strong>Bitwork:</strong> {JSON.stringify(data.$bitwork)}
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                    <strong>Max Mints:</strong> {data.$max_mints}
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                    <strong>Max Supply:</strong> {data.$max_supply}
                </Typography>
                {/* Add more data points as needed */}
            </CardContent>
        </Card>
    );
}

export default DataCard;
