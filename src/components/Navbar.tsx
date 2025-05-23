'use client';

import { AppBar,Toolbar } from '@mui/material';
import image from '../../public/images/logo_image.png';
import NavLinks from './Navlinks';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

export default function Navbar() {
    return(
      <AppBar
       position='fixed'
       sx={{
        zIndex:(theme)=>theme.zIndex.drawer+1,
        backgroundColor:(theme)=>theme.palette.background.paper,
        boxShadow:3,
        borderBottomLeftRadius:16,
        borderBottomRightRadius:16,
       }}
      >
        <Toolbar sx={{justifyContent:'space-between',
          px:{xs:2 , sm:3}
        }}>
         <Logo src={image.src} alt="logo" width={100} height={40}  />
         <NavLinks/>
         <ThemeToggle/>
        </Toolbar>
      </AppBar>
    );
}
