'use client';

import { notFound } from 'next/navigation';
import { songs } from '@/data/songs';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

interface SongPageProps {
  params: { id: string };
}

export default async function SongPage({ params }: SongPageProps) {
  const song = songs.find((s) => s.id === params.id);

  if (!song) return notFound();

  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', mt: 6 }}>
      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, p: 2 }}>
        <CardMedia
          component="img"
          image={song.image}
          alt={song.name}
          sx={{ width: 200, height: 200, borderRadius: 2, mr: { sm: 3 }, mb: { xs: 2, sm: 0 } }}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {song.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            <b>Artist:</b> {song.artist}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            <b>Album:</b> {song.album}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            <b>Duration:</b> {song.duration}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            <b>History:</b> {song.history.replace(/'/g, "&apos;")}
          </Typography>
          {song.artistReason && (
            <Typography variant="body2" sx={{ mt: 2 }}>
              <b>Artist&apos;s Reason:</b> {song.artistReason}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}