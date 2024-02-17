import {
  Card,
  Typography,
  Badge,
  CardContent,
  Avatar,
  Button,
  Divider,
} from '@mui/material';
import { CartProduct } from '../store/models/CartProducts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
interface ProductCartMoreDetailsProp {
  cartProducts: CartProduct[];
  cantProdInCart: number;
}

export default function ProductCartDetails({
  cartProducts,
  cantProdInCart,
}: ProductCartMoreDetailsProp) {
  return (
    <Card
      sx={{
        width: '66%',
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
        <strong>Productos en el carrito</strong>
        <Badge
          sx={{ marginTop: '10px' }}
          badgeContent={cantProdInCart}
          color="primary"
        >
          <ShoppingCartIcon color="action" />
        </Badge>
      </Typography>
      {cartProducts.map((product) => (
        <div key={product.id}>
          <CardContent
            sx={{
              display: 'flex',
              gap: 1,
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <Avatar src={product.image} />
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
            >
              +
            </Button>
            <Button
              variant="contained"
              color="info"
              size="small"
              sx={{ float: 'right', width: '40px', height: '40px' }}
              onClick={() => {}}
            >
              -
            </Button>
          </CardContent>
          <Divider />
        </div>
      ))}
    </Card>
  );
}
