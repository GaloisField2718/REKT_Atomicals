// components/NavigationDrawer.js
import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import TokenIcon from '@mui/icons-material/AccountBalanceWallet';
import NftIcon from '@mui/icons-material/Collections';
import { Terminal } from '@mui/icons-material';

function NavigationDrawer({ isOpen, onClose }) {
    return (
        <Drawer open={isOpen} onClose={onClose}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab icon={<HomeIcon />} label="Home" component={Link} to="/" />
                <Tab icon={<Terminal />} label="Terminal" component={Link} to="/terminal" />
                {/* <Tab icon={<TokenIcon />} label="Token" component={Link} to="/token" />
                <Tab icon={<NftIcon />} label="NFT" component={Link} to="/nft" /> */}
            </Tabs>
        </Drawer>
    );
}

export default NavigationDrawer;
