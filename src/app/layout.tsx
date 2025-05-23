'use client'
import { useState, useMemo, createContext, useEffect, ReactNode } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './globals.css';

const drawerWidth=400;

const GEMINI_PURPLE = '#8e24aa';
const GEMINI_LIGHT_PURPLE = '#ab47bc';
const DARK_BG = '#1a1a1a';
const DARK_PAPER = '#242424';
const LIGHT_BG = '#f8f9fa';
const LIGHT_PAPER = '#ffffff';

interface ColorModeContextType{
  toggleColorMode:()=>void;
  mode: 'light' | 'dark';
}

export const ColorModeContext = createContext<ColorModeContextType>({ toggleColorMode: () => {},mode:'dark' });

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

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
          }
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
                }
              }
            }
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                borderRadius: '0 0 12px 12px',
                backgroundColor: mode === 'dark' ? DARK_PAPER : LIGHT_PAPER,
                borderBottom: `1px solid ${mode === 'dark' ? 'rgba(142, 36, 170, 0.2)' : 'rgba(142, 36, 170, 0.1)'}`,
              }
            }
          },
          MuiDrawer: {
            styleOverrides: {
              paper: {
                borderRadius: '0 12px 12px 0',
                backgroundColor: mode === 'dark' ? DARK_PAPER : LIGHT_PAPER,
                borderRight: `1px solid ${mode === 'dark' ? 'rgba(142, 36, 170, 0.2)' : 'rgba(142, 36, 170, 0.1)'}`,
              }
            }
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
                }
              }
            }
          }
        }
      }),
          [mode]
  );

  // Memoize the color mode context value.
  // This provides a stable function reference for toggling the theme.
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode
    }),
    [mode], // Dependency array: this function never changes
  );

  // Effect to apply Tailwind CSS classes to the HTML body based on the current theme mode.
  // This ensures the global background and text colors match the MUI theme.
  useEffect(() => {
    document.body.className = mode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900';
  }, [mode]); // Dependency array: effect runs when 'mode' changes

  return (
    <html lang="en">
      {/* Apply base Tailwind classes to the body for global background and text color */}
      <body className={`${mode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} font-inter`}>
        {/* Provide the color mode context to all nested components */}
        <ColorModeContext.Provider value={colorMode}>
          {/* Provide the Material UI theme to all Material UI components */}
          <ThemeProvider theme={theme}>
            {/* CssBaseline resets browser default styles and applies basic Material UI styles */}
            <CssBaseline />
            {/* Main container for the entire application layout */}
            <Box sx={{ display: 'flex', minHeight: '100vh' }}>
              {/* Navbar component, fixed at the top */}
              <Navbar/>
              {/* Sidebar component, fixed on the left */}
              <Sidebar />
              {/* Main content area, takes remaining space and is scrollable */}
              <Box
                component="main"
                sx={{
                  flexGrow: 1, // Allows the main content to grow and fill available space
                  p: 0, // Padding around the main content (Material UI spacing unit)
                  mt: '64px', // Margin top to push content below the fixed AppBar
                  // Responsive width adjustment for larger screens (sm and up)
                  width: { sm: `calc(100% - ${drawerWidth}px)` }, // Full width minus sidebar width
                  // Responsive left margin for larger screens (sm and up)
                   ml: { sm: 1 },
                   mr:{sm:1},
        overflow: 'hidden'   // Margin left to push content past the fixed Sidebar
                }}
                className="p-4" // Tailwind padding (can be combined with MUI p)
              >
                {/* The 'children' prop renders the content of the current page (e.g., Home, About, Song Detail) */}
                {children}
              </Box>
            </Box>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  );
}