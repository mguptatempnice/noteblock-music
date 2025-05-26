// components/ClientLayout.tsx
'use client';

import React, { useState, useMemo, useEffect, ReactNode } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ColorModeContext from '@/context/ColorModeContext';
import '../app/globals.css';

const drawerWidth = 400;

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const theme = useMemo(() => {
    // Use CSS variables for palette if available
    const getVar = (name: string, fallback: string) =>
      typeof window !== 'undefined'
        ? getComputedStyle(document.documentElement).getPropertyValue(name) || fallback
        : fallback;

    return createTheme({
      palette: {
        mode,
        primary: {
          main: getVar('--primary-color', mode === 'dark' ? '#8e24aa' : '#1976d2')
        },
        secondary: {
          main: getVar('--accent-color', mode === 'dark' ? '#ab47bc' : '#64b5f6')
        },
        background: {
          default: getVar('--bg-default', mode === 'dark' ? '#1a1a1a' : '#f8f9fa'),
          paper: getVar('--bg-paper', mode === 'dark' ? '#242424' : '#ffffff'),
        },
        text: {
          primary: getVar('--text-primary', mode === 'dark' ? '#ffffff' : '#212121'),
        },
      },
    });
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode(prev => (prev === 'light' ? 'dark' : 'light')),
      mode,
    }),
    [mode]
  );

  useEffect(() => {
    document.body.className =
      mode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900';
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Navbar />
          <Sidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 0,
              mt: '64px',
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: 1 },
              mr: { sm: 1 },
              overflow: 'hidden',
            }}
          >
            {children}
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
