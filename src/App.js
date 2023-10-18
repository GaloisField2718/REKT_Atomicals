import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home, Token, Nft } from './testP'; // adjust paths as needed
import NavigationDrawer from './components/NavigationDrawer'; // adjust path as needed
import { AppBar, Toolbar, IconButton, Box, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';
import TerminalPage from './components/TerminalPage';
import HomePage from './HomePage';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
          <Toolbar>
            <Link to={'/'}>

              <Avatar
                src="/a.png"
                alt="Logo"
                sx={{ marginRight: 2 }} // Add some spacing on the right
              />
            </Link>

            {/* Other items can be added to the Toolbar here */}
            <Box sx={{ flexGrow: 1 }} /> {/* This will push the next item to the right */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Centered Content Wrapper */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // centers vertically
            alignItems: 'center',    // centers horizontally
            minHeight: 'calc(100vh - 64px)',  // assuming AppBar height is 64px, adjust if different
          }}
        >
          <NavigationDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

          <Routes>
            <Route path="/token" element={<Token />} />
            <Route path="/nft" element={<Nft />} />
            <Route path="/arc" element={<Home />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/terminal" element={<TerminalPage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
