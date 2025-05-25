// 'use client';

// import { useState, useMemo, useEffect, ReactNode } from 'react';
// import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';
// import ColorModeContext from '../context/ColorModeContext';
// import './globals.css';

// // Constants for theme colors and layout
// const drawerWidth = 400;
// const GEMINI_PURPLE = '#8e24aa';
// const GEMINI_LIGHT_PURPLE = '#ab47bc';
// const DARK_BG = '#1a1a1a';
// const DARK_PAPER = '#242424';
// const LIGHT_BG = '#f8f9fa';
// const LIGHT_PAPER = '#ffffff';

// // Props for the RootLayout component
// interface RootLayoutProps {
//   children: ReactNode;
// }

// export default function RootLayout({ children }: RootLayoutProps) {
//   const [mode, setMode] = useState<'light' | 'dark'>('dark');

//   // Memoized Material-UI theme based on the current mode
//   const theme = useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//           primary: {
//             main: mode === 'dark' ? GEMINI_LIGHT_PURPLE : GEMINI_PURPLE,
//             light: '#ce93d8',
//             dark: '#6a1b9a',
//           },
//           secondary: {
//             main: mode === 'dark' ? '#64b5f6' : '#1976d2',
//           },
//           background: {
//             default: mode === 'dark' ? DARK_BG : LIGHT_BG,
//             paper: mode === 'dark' ? DARK_PAPER : LIGHT_PAPER,
//           },
//           text: {
//             primary: mode === 'dark' ? '#ffffff' : '#212121',
//             secondary: mode === 'dark' ? '#b0b0b0' : '#666666',
//           },
//         },
//         components: {
//           MuiCard: {
//             styleOverrides: {
//               root: {
//                 borderRadius: 12,
//                 borderWidth: 1,
//                 borderStyle: 'solid',
//                 borderColor: mode === 'dark' ? 'rgba(142, 36, 170, 0.2)' : 'rgba(142, 36, 170, 0.1)',
//                 transition: 'all 0.3s ease-in-out',
//                 '&:hover': {
//                   borderColor: mode === 'dark' ? GEMINI_LIGHT_PURPLE : GEMINI_PURPLE,
//                   boxShadow: mode === 'dark'
//                     ? '0 0 10px rgba(171, 71, 188, 0.2)'
//                     : '0 0 10px rgba(142, 36, 170, 0.1)',
//                 },
//               },
//             },
//           },
//           MuiAppBar: {
//             styleOverrides: {
//               root: {
//                 borderRadius: '0 0 12px 12px',
//                 backgroundColor: mode === 'dark' ? DARK_PAPER : LIGHT_PAPER,
//                 borderBottom: `1px solid ${
//                   mode === 'dark' ? 'rgba(142, 36, 170, 0.2)' : 'rgba(142, 36, 170, 0.1)'
//                 }`,
//               },
//             },
//           },
//           MuiDrawer: {
//             styleOverrides: {
//               paper: {
//                 borderRadius: '0 12px 12px 0',
//                 backgroundColor: mode === 'dark' ? DARK_PAPER : LIGHT_PAPER,
//                 borderRight: `1px solid ${
//                   mode === 'dark' ? 'rgba(142, 36, 170, 0.2)' : 'rgba(142, 36, 170, 0.1)'
//                 }`,
//               },
//             },
//           },
//           MuiButton: {
//             styleOverrides: {
//               root: {
//                 borderRadius: 8,
//                 textTransform: 'none',
//                 '&:hover': {
//                   backgroundColor: mode === 'dark'
//                     ? 'rgba(171, 71, 188, 0.1)'
//                     : 'rgba(142, 36, 170, 0.05)',
//                 },
//               },
//             },
//           },
//         },
//       }),
//     [mode]
//   );

//   // Memoized color mode context value
//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//       },
//       mode,
//     }),
//     [mode]
//   );

//   // Apply Tailwind CSS classes to the body based on the current theme mode
//   useEffect(() => {
//     document.body.className =
//       mode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900';
//   }, [mode]);

//   return (
//     <html lang="en">
//       <body className={`${mode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} font-inter`}>
//         <ColorModeContext.Provider value={colorMode}>
//           <ThemeProvider theme={theme}>
//             <CssBaseline />
//             <Box sx={{ display: 'flex', minHeight: '100vh' }}>
//               <Navbar />
//               <Sidebar />
//               <Box
//                 component="main"
//                 sx={{
//                   flexGrow: 1,
//                   p: 0,
//                   mt: '64px',
//                   width: { sm: `calc(100% - ${drawerWidth}px)` },
//                   ml: { sm: 1 },
//                   mr: { sm: 1 },
//                   overflow: 'hidden',
//                 }}
//               >
//                 {children}
//               </Box>
//             </Box>
//           </ThemeProvider>
//         </ColorModeContext.Provider>
//       </body>
//     </html>
//   );
// }
// 'use client';



// 'use client';

// import { useState, useMemo, useEffect, ReactNode } from 'react';
// import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';
// import ColorModeContext from '../context/ColorModeContext';
// import useApplyCSS from '../hooks/useApplyCSS';
// import { usePathname } from 'next/navigation';
// import './globals.css';

// const drawerWidth = 400;

// export default function RootLayout({ children }: { children: ReactNode }) {
//   const [mode, setMode] = useState<'light' | 'dark'>('dark');
//   const pathname = usePathname();

//   // Extract userId from the pathname (e.g., /api/css/alice -> alice)
//   const userId = pathname.startsWith('/api/css/') ? pathname.split('/').pop() : null;

//   // Apply CSS variables dynamically
//   useApplyCSS(userId);

//   const theme = useMemo(() => {
//     const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color') || '#ab47bc';
//     const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color') || '#1976d2';
//     const backgroundDefault = getComputedStyle(document.documentElement).getPropertyValue('--bg-default') || '#f8f9fa';
//     const backgroundPaper = getComputedStyle(document.documentElement).getPropertyValue('--bg-paper') || '#ffffff';
//     const textPrimary = getComputedStyle(document.documentElement).getPropertyValue('--text-primary') || '#212121';

//     return createTheme({
//       palette: {
//         mode,
//         primary: {
//           main: primaryColor,
//         },
//         secondary: {
//           main: accentColor,
//         },
//         background: {
//           default: backgroundDefault,
//           paper: backgroundPaper,
//         },
//         text: {
//           primary: textPrimary,
//         },
//       },
//     });
//   }, [mode]);

//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//       },
//       mode,
//     }),
//     [mode]
//   );

//   useEffect(() => {
//     document.body.className =
//       mode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900';
//   }, [mode]);

//   return (
//     <html lang="en">
//       <body>
//         <ColorModeContext.Provider value={colorMode}>
//           <ThemeProvider theme={theme}>
//             <CssBaseline />
//             <Box sx={{ display: 'flex', minHeight: '100vh' }}>
//               <Navbar />
//               <Sidebar />
//               <Box
//                 component="main"
//                 sx={{
//                   flexGrow: 1,
//                   p: 0,
//                   mt: '64px',
//                   width: { sm: `calc(100% - ${drawerWidth}px)` },
//                   ml: { sm: 1 },
//                   mr: { sm: 1 },
//                   overflow: 'hidden',
//                 }}
//               >
//                 {children}
//               </Box>
//             </Box>
//           </ThemeProvider>
//         </ColorModeContext.Provider>
//       </body>
//     </html>
//   );
// }
// 'use client';

// import { useState, useMemo, useEffect, ReactNode } from 'react';
// import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar'; // Ensure Sidebar is imported
// import ColorModeContext from '../context/ColorModeContext';
// import './globals.css';

// const drawerWidth = 400;

// export default function RootLayout({ children }: { children: ReactNode }) {
//   const [mode, setMode] = useState<'light' | 'dark'>('dark');

//   const theme = useMemo(() => {
//     const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color') || '#8e24aa';
//     const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color') || '#ab47bc';
//     const backgroundDefault = getComputedStyle(document.documentElement).getPropertyValue('--bg-default') || '#1a1a1a';
//     const backgroundPaper = getComputedStyle(document.documentElement).getPropertyValue('--bg-paper') || '#242424';
//     const textPrimary = getComputedStyle(document.documentElement).getPropertyValue('--text-primary') || '#ffffff';

//     return createTheme({
//       palette: {
//         mode,
//         primary: {
//           main: primaryColor,
//         },
//         secondary: {
//           main: accentColor,
//         },
//         background: {
//           default: backgroundDefault,
//           paper: backgroundPaper,
//         },
//         text: {
//           primary: textPrimary,
//         },
//       },
//     });
//   }, [mode]);

//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//       },
//       mode,
//     }),
//     [mode]
//   );

//   useEffect(() => {
//     document.body.className =
//       mode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900';
//   }, [mode]);

//   return (
//     <html lang="en">
//       <body>
//         <ColorModeContext.Provider value={colorMode}>
//           <ThemeProvider theme={theme}>
//             <CssBaseline />
//             <Box sx={{ display: 'flex', minHeight: '100vh' }}>
//               <Navbar />
//               <Sidebar /> {/* Ensure Sidebar is included */}
//               <Box
//                 component="main"
//                 sx={{
//                   flexGrow: 1,
//                   p: 0,
//                   mt: '64px',
//                   width: { sm: `calc(100% - ${drawerWidth}px)` },
//                   ml: { sm: 1 },
//                   mr: { sm: 1 },
//                   overflow: 'hidden',
//                 }}
//               >
//                 {children}
//               </Box>
//             </Box>
//           </ThemeProvider>
//         </ColorModeContext.Provider>
//       </body>
//     </html>
//   );
// }

// works fine below 

// 'use client';

// import { useState, useMemo, useEffect, ReactNode } from 'react';
// import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';
// import ColorModeContext from '../context/ColorModeContext';
// import './globals.css';

// const drawerWidth = 400;

// export default function RootLayout({ children }: { children: ReactNode }) {
//   const [mode, setMode] = useState<'light' | 'dark'>('dark');

//   const theme = useMemo(() => {
//     const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color') || (mode === 'dark' ? '#8e24aa' : '#1976d2');
//     const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color') || (mode === 'dark' ? '#ab47bc' : '#64b5f6');
//     const backgroundDefault = getComputedStyle(document.documentElement).getPropertyValue('--bg-default') || (mode === 'dark' ? '#1a1a1a' : '#f8f9fa');
//     const backgroundPaper = getComputedStyle(document.documentElement).getPropertyValue('--bg-paper') || (mode === 'dark' ? '#242424' : '#ffffff');
//     const textPrimary = getComputedStyle(document.documentElement).getPropertyValue('--text-primary') || (mode === 'dark' ? '#ffffff' : '#212121');

//     return createTheme({
//       palette: {
//         mode,
//         primary: {
//           main: primaryColor,
//         },
//         secondary: {
//           main: accentColor,
//         },
//         background: {
//           default: backgroundDefault,
//           paper: backgroundPaper,
//         },
//         text: {
//           primary: textPrimary,
//         },
//       },
//     });
//   }, [mode]);

//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//       },
//       mode,
//     }),
//     [mode]
//   );

//   useEffect(() => {
//     document.body.className =
//       mode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900';
//   }, [mode]);

//   return (
//     <html lang="en">
//       <body>
//         <ColorModeContext.Provider value={colorMode}>
//           <ThemeProvider theme={theme}>
//             <CssBaseline />
//             <Box sx={{ display: 'flex', minHeight: '100vh' }}>
//               <Navbar />
//               <Sidebar />
//               <Box
//                 component="main"
//                 sx={{
//                   flexGrow: 1,
//                   p: 0,
//                   mt: '64px',
//                   width: { sm: `calc(100% - ${drawerWidth}px)` },
//                   ml: { sm: 1 },
//                   mr: { sm: 1 },
//                   overflow: 'hidden',
//                 }}
//               >
//                 {children}
//               </Box>
//             </Box>
//           </ThemeProvider>
//         </ColorModeContext.Provider>
//       </body>
//     </html>
//   );
// }


// 'use client';

// import React, { useState, useMemo, useEffect, ReactNode } from 'react';
// import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';
// import ColorModeContext from '../context/ColorModeContext';
// import './globals.css';

// const drawerWidth = 400;

// export default function RootLayout({ children }: { children: ReactNode }) {
//   const [mode, setMode] = useState<'light' | 'dark'>('dark');

//   // Memoized Material-UI theme based on the current mode
//   const theme = useMemo(() => {
//     const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color') || (mode === 'dark' ? '#8e24aa' : '#1976d2');
//     const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color') || (mode === 'dark' ? '#ab47bc' : '#64b5f6');
//     const backgroundDefault = getComputedStyle(document.documentElement).getPropertyValue('--bg-default') || (mode === 'dark' ? '#1a1a1a' : '#f8f9fa');
//     const backgroundPaper = getComputedStyle(document.documentElement).getPropertyValue('--bg-paper') || (mode === 'dark' ? '#242424' : '#ffffff');
//     const textPrimary = getComputedStyle(document.documentElement).getPropertyValue('--text-primary') || (mode === 'dark' ? '#ffffff' : '#212121');

//     return createTheme({
//       palette: {
//         mode,
//         primary: {
//           main: primaryColor,
//         },
//         secondary: {
//           main: accentColor,
//         },
//         background: {
//           default: backgroundDefault,
//           paper: backgroundPaper,
//         },
//         text: {
//           primary: textPrimary,
//         },
//       },
//       components: {
//         MuiCard: {
//           styleOverrides: {
//             root: {
//               borderRadius: 12,
//               borderWidth: 1,
//               borderStyle: 'solid',
//               borderColor: mode === 'dark' ? 'rgba(142, 36, 170, 0.2)' : 'rgba(142, 36, 170, 0.1)',
//               transition: 'all 0.3s ease-in-out',
//               '&:hover': {
//                 borderColor: mode === 'dark' ? '#ab47bc' : '#8e24aa',
//                 boxShadow: mode === 'dark'
//                   ? '0 0 10px rgba(171, 71, 188, 0.2)'
//                   : '0 0 10px rgba(142, 36, 170, 0.1)',
//               },
//             },
//           },
//         },
//         MuiAppBar: {
//           styleOverrides: {
//             root: {
//               borderRadius: '0 0 12px 12px',
//               backgroundColor: mode === 'dark' ? '#242424' : '#ffffff',
//               borderBottom: `1px solid ${
//                 mode === 'dark' ? 'rgba(142, 36, 170, 0.2)' : 'rgba(142, 36, 170, 0.1)'
//               }`,
//             },
//           },
//         },
//         MuiDrawer: {
//           styleOverrides: {
//             paper: {
//               borderRadius: '0 12px 12px 0',
//               backgroundColor: mode === 'dark' ? '#242424' : '#ffffff',
//               borderRight: `1px solid ${
//                 mode === 'dark' ? 'rgba(142, 36, 170, 0.2)' : 'rgba(142, 36, 170, 0.1)'
//               }`,
//             },
//           },
//         },
//         MuiButton: {
//           styleOverrides: {
//             root: {
//               borderRadius: 8,
//               textTransform: 'none',
//               '&:hover': {
//                 backgroundColor: mode === 'dark'
//                   ? 'rgba(171, 71, 188, 0.1)'
//                   : 'rgba(142, 36, 170, 0.05)',
//               },
//             },
//           },
//         },
//       },
//     });
//   }, [mode]);

//   // Memoized color mode context value
//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//       },
//       mode,
//     }),
//     [mode]
//   );

//   // Apply Tailwind CSS classes to the body based on the current theme mode
//   useEffect(() => {
//     document.body.className =
//       mode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900';
//   }, [mode]);

//   return (
//     <html lang="en">
//       <body className={`${mode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} font-inter`}>
//         <ColorModeContext.Provider value={colorMode}>
//           <ThemeProvider theme={theme}>
//             <CssBaseline />
//             <Box sx={{ display: 'flex', minHeight: '100vh' }}>
//               <Navbar />
//               <Sidebar />
//               <Box
//                 component="main"
//                 sx={{
//                   flexGrow: 1,
//                   p: 0,
//                   mt: '64px',
//                   width: { sm: `calc(100% - ${drawerWidth}px)` },
//                   ml: { sm: 1 },
//                   mr: { sm: 1 },
//                   overflow: 'hidden',
//                 }}
//               >
//                 {children}
//               </Box>
//             </Box>
//           </ThemeProvider>
//         </ColorModeContext.Provider>
//       </body>
//     </html>
//   );
// }

'use client';

import React, { useState, useMemo, useEffect, ReactNode } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ColorModeContext from '../context/ColorModeContext';
import './globals.css';

const drawerWidth = 400;

export default function RootLayout({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  // Memoized Material-UI theme based on the current mode
  const theme = useMemo(() => {
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color') || (mode === 'dark' ? '#8e24aa' : '#1976d2');
    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color') || (mode === 'dark' ? '#ab47bc' : '#64b5f6');
    const backgroundDefault = getComputedStyle(document.documentElement).getPropertyValue('--bg-default') || (mode === 'dark' ? '#1a1a1a' : '#f8f9fa');
    const backgroundPaper = getComputedStyle(document.documentElement).getPropertyValue('--bg-paper') || (mode === 'dark' ? '#242424' : '#ffffff');
    const textPrimary = getComputedStyle(document.documentElement).getPropertyValue('--text-primary') || (mode === 'dark' ? '#ffffff' : '#212121');

    return createTheme({
      palette: {
        mode,
        primary: {
          main: primaryColor,
        },
        secondary: {
          main: accentColor,
        },
        background: {
          default: backgroundDefault,
          paper: backgroundPaper,
        },
        text: {
          primary: textPrimary,
        },
      },
    });
  }, [mode]);

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
              {/* Ensure Sidebar is always rendered */}
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