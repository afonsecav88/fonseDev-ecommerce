import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useGetProductById } from '../hooks/useGetProductById';
import { AddToCart } from './AddToCart';
import { useNavigate, useParams } from 'react-router-dom';

export const ProductsDetails = () => {
  const { id } = useParams();
  const { productGetById } = useGetProductById(+id!);
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: { xs: 'flex', lg: 'flex', xl: 'flex' },
        justifyContent: {
          xs: 'start',
          md: 'center',
          lg: 'center',
          xl: 'center',
        },
        minWidth: '450px',
        gap: 2,
      }}
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
            onClick={() => navigate(-1)}
            variant="contained"
            color="success"
            size="small"
            sx={{ display: 'flex', float: 'right', alignContent: 'center' }}
            endIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </Card>
      )}
    </Container>
  );
};
