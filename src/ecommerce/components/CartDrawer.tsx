import { Container, Button, Drawer } from '@mui/material';
import { useState } from 'react';
import { useSelectorAndDispatch } from '../hooks/useSelectorAndDispatch';
import { ProductInCartCard } from './ProductInCartCard';

export default function CartDrawer() {
  const { cartsProducts } = useSelectorAndDispatch();
  const { cartProducts } = cartsProducts;
  const [open, setOpen] = useState(false);

  return (
    <Container sx={{ display: 'grid', gap: 4 }}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <ProductInCartCard cartProducts={cartProducts} />
      </Drawer>
    </Container>
  );
}
