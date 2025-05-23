'use client';

import { useState, useMemo, useEffect, ReactNode } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ColorModeContext from '../context/ColorModeContext';
import './globals.css';

// Constants for theme colors and layout
const drawerWidth = 400;
const GEMINI_PURPLE = '#8e24aa';
const GEMINI_LIGHT_PURPLE = '#ab47bc';
const DARK_BG = '#1a1a1a';
const DARK_PAPER = '#242424';
const LIGHT_BG = '#f8f9fa';
const LIGHT_PAPER = '#ffffff';

// Props for the RootLayout component
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  // Memoized Material-UI theme based on the current mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? GEMINI_LIGHT_PURPLE : GEMINI_PURPLE,
            light: '#ce93d8',
            dark: '#6a1b9a',
          },
          secondary: {
            main: mode === 'dark' ? '#64b5f6' : '#1976d2',
          },
          background: {
            default: mode === 'dark' ? DARK_BG : LIGHT_BG,
            paper: mode === 'dark' ? DARK_PAPER : LIGHT_PAPER,
          },
          text: {
            primary: mode === 'dark' ? '#ffffff' : '#212121',
            secondary: mode === 'dark' ? '#b0b0b0' : '#666666',
          },
        },
        components: {
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: mode === 'dark' ? 'rgba(142, 36, 170, 0.2)' : 'rgba(142, 36, 170, 0.1)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  borderColor: mode === 'dark' ? GEMINI_LIGHT_PURPLE : GEMINI_PURPLE,
                  boxShadow: mode === 'dark'
                    ? '0 0 10px rgba(171, 71, 188, 0.2)'
                    : '0 0 10px rgba(142, 36, 170, 0.1)',
                },
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                borderRadius: '0 0 12px 12px',
                backgroundColor: mode === 'dark' ? DARK_PAPER : LIGHT_PAPER,
                borderBottom: `1px solid ${
                  mode === 'dark' ? 'rgba(142, 36, 170, 0.2)' : 'rgba(142, 36, 170, 0.1)'
                }`,
              },
            },
          },
          MuiDrawer: {
            styleOverrides: {
              paper: {
                borderRadius: '0 12px 12px 0',
                backgroundColor: mode === 'dark' ? DARK_PAPER : LIGHT_PAPER,
                borderRight: `1px solid ${
                  mode === 'dark' ? 'rgba(142, 36, 170, 0.2)' : 'rgba(142, 36, 170, 0.1)'
                }`,
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: mode === 'dark'
                    ? 'rgba(171, 71, 188, 0.1)'
                    : 'rgba(142, 36, 170, 0.05)',
                },
              },
            },
          },
        },
      }),
    [mode]
  );

  // Memoized color mode context value
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode]
  );

  // Apply Tailwind CSS classes to the body based on the current theme mode
  useEffect(() => {
    document.body.className =
      mode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900';
  }, [mode]);

  return (
    <html lang="en">
      <body className={`${mode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} font-inter`}>
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
      </body>
    </html>
  );
}