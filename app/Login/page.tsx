'use client';

import React from 'react';
import LoginForm from '@/components/LoginForm';
import { Container, Typography, Box } from '@mui/material';
import Link from 'next/link';

export default function Login() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <LoginForm />
        <Box sx={{ mt: 2 }}>
          <Link href="/register">Don't have an account? Register</Link>
        </Box>
      </Box>
    </Container>
  );
}