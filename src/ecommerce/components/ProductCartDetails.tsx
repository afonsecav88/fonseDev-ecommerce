import { CartProduct } from '../store/models/CartProducts';
import { useGetProductById } from '../hooks/useGetProductById';
import { useAddToCart } from '../hooks/useAddToCart';
import { useDeleteProductById } from '../hooks/useDeleteProductById';
import { Typography, CardContent, Avatar, Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
    <CardContent
      key={product.id}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 2 },
        flexWrap: 'wrap',
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      <Avatar src={product.image} />
      <Typography
        sx={{
          width: {
            sx: '80%',
            md: '40%',
            textAlign: 'center',
            marginBottom: 4,
          },
        }}
      >
        {product.title}
      </Typography>
      <Typography
        sx={{
          width: {
            sx: '80%',
            md: '15%',
          },
          marginX: 2,
        }}
        variant="body1"
        color="text.secondary"
      >
        <strong>Precio: $ </strong> {product.price}
      </Typography>
      <Typography
        sx={{
          width: {
            sx: '80%',
            md: '15%',
          },
        }}
        variant="body1"
        color="text.secondary"
      >
        <strong> Cantidad: </strong> {product.count}
      </Typography>
      <Box sx={{ marginY: 2 }}>
        <Button
          variant="contained"
          color="success"
          size="small"
          sx={{
            width: '40px',
            height: '40px',
            marginLeft: '20px',
          }}
          onClick={() => handleCLickAdd()}
        >
          <AddIcon />
        </Button>
        <Button
          variant="contained"
          color="error"
          size="small"
          sx={{ width: '40px', height: '40px', marginLeft: '20px' }}
          onClick={() => deleteProductById(product.id)}
        >
          <RemoveIcon />
        </Button>
      </Box>
    </CardContent>
  );
}
