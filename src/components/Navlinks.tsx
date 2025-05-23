'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Button, useTheme } from '@mui/material';

const Navlinks = () => {
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
                <Button 
                    sx={{ 
                        textTransform: 'none',
                        color: theme.palette.text.primary,
                        '&:hover': {
                            backgroundColor: theme.palette.mode === 'dark' 
                                ? 'rgba(255, 255, 255, 0.08)'
                                : 'rgba(0, 0, 0, 0.04)'
                        }
                    }}
                >
                    Home
                </Button>
            </Link>
            <Link href="/about" style={{ textDecoration: 'none' }}>
                <Button
                    sx={{ 
                        textTransform: 'none',
                        color: theme.palette.text.primary,
                        '&:hover': {
                            backgroundColor: theme.palette.mode === 'dark' 
                                ? 'rgba(255, 255, 255, 0.08)'
                                : 'rgba(0, 0, 0, 0.04)'
                        }
                    }}
                >
                    About Us
                </Button>
            </Link>
        </Box>
    );
};

export default Navlinks;