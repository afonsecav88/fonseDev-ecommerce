import { Button } from '@mui/material';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { useNavigate } from 'react-router-dom';
import { useCheckRoute } from '../hooks/useCheckRoute';

export const CartMoreDetailsButton = () => {
  const navigate = useNavigate();
  const { isRouteCartDetails } = useCheckRoute();
  return (
    <>
      {!isRouteCartDetails && (
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
      )}
    </>
  );
};
