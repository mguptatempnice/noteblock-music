'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import ColorModeContext from '../context/ColorModeContext';

const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const pathname = usePathname();

  // Check if the current route is a user-specific route (e.g., "/alice", "/bob", etc.)
  // Exclude known static routes like "/", "/about", etc.
  const isUserRoute =
    pathname &&
    /^\/[^/]+$/.test(pathname) && // matches "/something" but not "/something/else"
    !['/', '/about'].includes(pathname);

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'var(--bg-paper)',
        color: 'var(--text-primary)',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar sx={{ justifyContent: isUserRoute ? 'center' : 'space-between' }}>
        {/* App Title */}
        {!isUserRoute && (
          <Typography variant="h6" noWrap component="div">
            Music App
          </Typography>
        )}

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            href="/"
            sx={{
              color: 'var(--accent-color)',
              fontWeight: 'bold',
            }}
          >
            Home
          </Button>
          <Button
            href="/about"
            sx={{
              color: 'var(--accent-color)',
              fontWeight: 'bold',
            }}
          >
            About Us
          </Button>
        </Box>

        {/* Dark Mode Toggle */}
        {!isUserRoute && (
          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;