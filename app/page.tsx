'use client';

import React from 'react';
import Link from 'next/link';
import { Button, Container, Typography, Box } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Pantry Tracker
        </Typography>
        <Box sx={{ '& > *': { m: 1 } }}>
          <Button variant="contained" component={Link} href="/login">
            Login
          </Button>
          <Button variant="outlined" component={Link} href="/register">
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
}