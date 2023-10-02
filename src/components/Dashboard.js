import React from 'react';
import DataTable from './DataTable';
import DataCard from './DataCard';
import { Stack } from '@mui/material';

function Dashboard({ data }) {
    return (
        <Stack display='flex' alignItems='center' className="dashboard">
            <DataCard globalData={data.result.result}
            />
            <DataTable locationInfo={data.result.result.location_info} />
        </Stack>
    );
}

export default Dashboard;
