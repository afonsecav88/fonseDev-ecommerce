import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductById } from '../hooks/useGetProductById';
import { AddToCart } from './AddToCart';

export const ProductsDetails = () => {
  const { id } = useParams();
  const { productGetById } = useGetProductById(+id!);

  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <Container
      sx={{ display: 'flex', justifyContent: 'center', maxWidth: 'xs' }}
    >
      {productGetById && (
        <Card sx={{ maxWidth: 345, padding: 3, marginBottom: 2 }}>
          <Typography variant="h6">
            <strong> {productGetById.title}</strong>
          </Typography>
          <Typography
            sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}
          >
            <AddToCart />
          </Typography>
          <br />
          <CardMedia
            sx={{ height: '100%vh', width: '100%', padding: 4 }}
            image={productGetById.image}
            title={productGetById.title}
            component="img"
          />
          <CardContent>
            <Typography variant="h6" component="div" sx={{ marginY: 2 }}>
              <strong> Category: </strong> {productGetById.category}
            </Typography>
            <Typography variant="body1" sx={{ marginY: 2 }}>
              {productGetById.description}
            </Typography>
            <Typography variant="body2">
              <strong> Price: </strong> {`$ ${productGetById.price}`}
            </Typography>
            <Typography
              variant="body2"
              color=""
              sx={{
                display: 'inline-flex',
                alignContent: 'space-between',
                gap: 1,
                marginY: 2,
              }}
            >
              <strong>Rate:</strong> {productGetById.rating.rate}{' '}
              <strong> Count: </strong> {productGetById.rating.count}
            </Typography>
          </CardContent>
          <Button
            onClick={onNavigateBack}
            variant="contained"
            color="success"
            size="small"
            sx={{ display: 'flex', float: 'right' }}
          >
            Back
          </Button>
        </Card>
      )}
    </Container>
  );
};
