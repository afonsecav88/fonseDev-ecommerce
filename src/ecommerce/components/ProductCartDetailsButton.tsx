import { Button } from '@mui/material';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { useNavigate } from 'react-router-dom';

export const ProductCartDetailsButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      color="info"
      size="small"
      sx={{
        float: 'right',
        width: '281px',
        height: '50px',
        right: '0px',
        position: 'fixed',
        zIndex: '1500',
      }}
      onClick={() => navigate(`cart/details`)}
      startIcon={<ReadMoreIcon />}
    >
      Ver detalles de los productos en el carrito
    </Button>
  );
};
