import {
  Card,
  Typography,
  CardContent,
  Avatar,
  Divider,
  Container,
  Button,
  Badge,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelectorAndDispatch } from '../hooks/useSelectorAndDispatch';

export const ProductCartDetails = () => {
  const { cartsProducts } = useSelectorAndDispatch();
  const { cartProducts } = cartsProducts;
  return (
    <Container sx={{ display: 'flex', minWidth: '1000px' }}>
      <Card
        sx={{
          width: '67%',
          // position: 'fixed',
          // top: '80px',
          // right: '1px',
          // zIndex: '1500',
          backgroundColor: '#E2E2E2',
        }}
      >
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            gap: 2,
            padding: 1,
            backgroundColor: '#51D27F',
            flexWrap: 'wrap',
          }}
          gutterBottom
          variant="overline"
          component="div"
        >
          <strong>Productos en el carrito </strong>
          <Badge sx={{ marginTop: '10px' }} badgeContent={4} color="primary">
            <ShoppingCartIcon color="action" />
          </Badge>
        </Typography>
        {cartProducts.map((product) => (
          <div key={product.id}>
            <CardContent sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Typography
                sx={{ display: 'inline-flex', gap: 1 }}
                gutterBottom
                variant="subtitle1"
                component="div"
              >
                <Avatar src={product.image} />
              </Typography>
              <Typography sx={{ width: '40%' }}>{product.title}</Typography>
              <Typography
                sx={{ width: '15%' }}
                variant="body2"
                color="text.secondary"
              >
                <strong>Precio: $ </strong> {product.price}
              </Typography>
              <Typography
                sx={{ width: '15%' }}
                variant="body2"
                color="text.secondary"
              >
                <strong>Cantidad:</strong> {product.count}
              </Typography>
              <Button
                variant="contained"
                color="info"
                size="small"
                sx={{ float: 'right', width: '40px', height: '40px' }}
                onClick={() => {}}
                // startIcon={<ArrowForwardIcon />}
              >
                +
              </Button>
              <Button
                variant="contained"
                color="info"
                size="small"
                sx={{ float: 'right', width: '40px', height: '40px' }}
                onClick={() => {}}
                // startIcon={<ArrowForwardIcon />}
              >
                -
              </Button>
            </CardContent>
            <Divider />
          </div>
        ))}
      </Card>
    </Container>
  );
};
