'use client';

import { Card, CardContent, Typography } from '@mui/material';
import React from 'react'

interface FactCardProps{
    fact:string;
}

const FactCard = ({fact}:FactCardProps) => {
  return (
    <Card variant='outlined' 
    sx={{ mb: 2, borderRadius: 2, bgcolor: 'background.paper' }}>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          {fact}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default FactCard