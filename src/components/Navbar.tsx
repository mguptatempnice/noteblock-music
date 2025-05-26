// 'use client';

// import { AppBar,Toolbar } from '@mui/material';
// import image from '../../public/images/logo_image.png';
// import NavLinks from './Navlinks';
// import ThemeToggle from './ThemeToggle';
// import Logo from './Logo';

// export default function Navbar() {
//     return(
//       <AppBar
//        position='fixed'
//        sx={{
//         zIndex:(theme)=>theme.zIndex.drawer+1,
//         backgroundColor:(theme)=>theme.palette.background.paper,
//         boxShadow:3,
//         borderBottomLeftRadius:16,
//         borderBottomRightRadius:16,
//        }}
//       >
//         <Toolbar sx={{justifyContent:'space-between',
//           px:{xs:2 , sm:3}
//         }}>
//          <Logo src={image.src} alt="logo" width={100} height={40}  />
//          <NavLinks/>
//          <ThemeToggle/>
//         </Toolbar>
//       </AppBar>
//     );
// }

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

  // Check if the current route is a user-specific route
  const isUserRoute = pathname?.startsWith('/alice') || pathname?.startsWith('/bob') || pathname?.startsWith('/charlie');

  return (
    <AppBar
      position="fixed"
      sx={{
        
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'var(--bg-paper)', // Use CSS variable for background
        color: 'var(--text-primary)', // Use CSS variable for text color
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
              color: 'var(--accent-color)', // Match the album name color
              fontWeight: 'bold',
            }}
          >
            Home
          </Button>
          <Button
            href="/about"
            sx={{
              color: 'var(--accent-color)', // Match the album name color
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