'use client';

import React, { useState } from 'react';
import PantryItemList from '@/components/PantryItemList';
import AddItemForm from '@/components/AddItemForm';
import { Container, Typography, Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

interface PantryItem {
  id: string;
  name: string;
  quantity: number;
}

export default function Pantry() {
  const [pantryItems, setPantryItems] = useState<PantryItem[]>([]);
  const router = useRouter();

  const handleAddItem = (name: string, quantity: number) => {
    const newItem: PantryItem = {
      id: Date.now().toString(),
      name,
      quantity
    };
    setPantryItems([...pantryItems, newItem]);
  };

  const handleDeleteItem = (id: string) => {
    setPantryItems(pantryItems.filter(item => item.id !== id));
  };

  const handleLogout = () => {
    // Implement logout logic here
    router.push('/');
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Your Pantry
        </Typography>
        <AddItemForm onAddItem={handleAddItem} />
        <PantryItemList items={pantryItems} onDelete={handleDeleteItem} />
        <Button onClick={handleLogout} variant="contained" sx={{ mt: 2 }}>
          Logout
        </Button>
      </Box>
    </Container>
  );
}