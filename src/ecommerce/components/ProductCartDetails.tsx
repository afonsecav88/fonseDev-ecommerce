import {
  Typography,
  CardContent,
  Avatar,
  Button,
  Divider,
  Box,
} from '@mui/material';

import { CartProduct } from '../store/models/CartProducts';
import { useGetProductById } from '../hooks/useGetProductById';
import { useAddToCart } from '../hooks/useAddToCart';
import { useDeleteProductById } from '../hooks/useDeleteProductById';
interface ProductCartMoreDetailsProp {
  product: CartProduct;
}

export default function ProductCartDetails({
  product,
}: ProductCartMoreDetailsProp) {
  const { productGetById } = useGetProductById();
  const { addCartProduct } = useAddToCart();
  const { deleteProductById } = useDeleteProductById();

  const handleCLickAdd = () => {
    const productFounded = productGetById(product.id);
    if (!productFounded) return;
    addCartProduct(productFounded);
  };

  return (
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
        <Box>
          <Button
            variant="contained"
            color="info"
            size="small"
            sx={{ width: '40px', height: '40px' }}
            onClick={() => handleCLickAdd()}
          >
            +
          </Button>
          <Button
            variant="contained"
            color="info"
            size="small"
            sx={{ width: '40px', height: '40px' }}
            onClick={() => deleteProductById(product.id)}
          >
            -
          </Button>
        </Box>
      </CardContent>

      <Divider />
    </div>
  );
}
