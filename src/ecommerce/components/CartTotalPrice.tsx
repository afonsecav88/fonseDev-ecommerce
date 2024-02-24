import { Stack, Typography } from '@mui/material';
import { useCalcTotalPrice } from '../hooks/useCalcTotalPrice';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';

export const CartTotalPrice = () => {
  const { calcTotalPrice } = useCalcTotalPrice();
  return (
    <Stack sx={{ width: '420px', margin: 2 }}>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ display: 'flex' }}
      >
        <strong>Precio total: </strong>
        <AttachMoneyRoundedIcon />
        {calcTotalPrice().toFixed(2)}
      </Typography>
    </Stack>
  );
};
