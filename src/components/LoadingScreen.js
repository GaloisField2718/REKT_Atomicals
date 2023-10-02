import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'

function LoadingScreen() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '2rem'
            }}
        >
            <CircularProgress color='warning' />
            <Typography>Connection to ElectrumX server. Loading...</Typography>
        </Box>
    )
}

export default LoadingScreen