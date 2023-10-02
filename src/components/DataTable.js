import React from 'react';
import {
    TableContainer, Table, TableHead, TableBody,
    TableRow, TableCell, Paper, Stack
} from '@mui/material';

function LocationInfoTable({ locationInfo }) {
    return (
        <Stack display='flex' maxWidth={340}>

            <TableContainer component={Paper} style={{ overflowX: 'auto', maxWidth: '100%' }}>
                <Table size="small" aria-label="location info table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Info</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {locationInfo.map((info, index) => (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{JSON.stringify(info)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>

    );
}

export default LocationInfoTable;
