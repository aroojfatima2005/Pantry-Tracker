'use client';

import React from 'react';
import RegisterForm from '@/components/RegisterForm';
import { Container, Typography, Box } from '@mui/material';
import Link from 'next/link';

export default function Register() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Register
        </Typography>
        <RegisterForm />
        <Box sx={{ mt: 2 }}>
          <Link href="/login">Already have an account? Login</Link>
        </Box>
      </Box>
    </Container>
  );
}