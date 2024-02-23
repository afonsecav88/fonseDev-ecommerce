import { Stack, Typography } from '@mui/material';
import { useCalcTotalPrice } from '../hooks/useCalcTotalPrice';

export const CartTotalPrice = () => {
  const { calcTotalPrice } = useCalcTotalPrice();
  return (
    <Stack sx={{ width: '420px', margin: 2 }}>
      <Typography variant="body2" color="text.secondary">
        <strong>Precio total 💲:</strong> {calcTotalPrice().toFixed(2)}
      </Typography>
    </Stack>
  );
};
