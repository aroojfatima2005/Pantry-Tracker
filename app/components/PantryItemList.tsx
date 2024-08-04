import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface PantryItem {
  id: string;
  name: string;
  quantity: number;
}

interface PantryItemListProps {
  items: PantryItem[];
  onDelete: (id: string) => void;
}

const PantryItemList: React.FC<PantryItemListProps> = ({ items, onDelete }) => {
  return (
    <List>
      {items.map((item) => (
        <ListItem
          key={item.id}
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => onDelete(item.id)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={item.name}
            secondary={`Quantity: ${item.quantity}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default PantryItemList;
    