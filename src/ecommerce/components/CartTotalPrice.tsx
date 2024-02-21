import { Stack, Typography } from '@mui/material';
import { useCalcTotalPrice } from '../hooks/useCalcTotalPrice';

export const CartTotalPrice = () => {
  const { calcTotalPrice } = useCalcTotalPrice();
  return (
    <Stack sx={{ width: '220px', marginX: 2, marginY: 2 }}>
      <Typography variant="body2" color="text.secondary">
        <strong>Precio total 💲:</strong> {calcTotalPrice()}
      </Typography>
    </Stack>
  );
};
