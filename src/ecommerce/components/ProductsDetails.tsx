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
import { Loading } from './Loading';
import { useEffect, useState } from 'react';
import { ProductEntity } from '../store/models/ProductEntity';
import { NoFoundPage } from '../pages/NoFoundPage';

export const ProductsDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { productGetById, isLoading } = useGetProductById();
  const [productFounded, setProductFounded] = useState<
    ProductEntity | null | undefined
  >(null);

  useEffect(() => {
    if (!id) return;
    const foundProduct = productGetById(+id);
    setProductFounded(foundProduct);
  }, [id, productGetById, isLoading]);

  if (isLoading) return <Loading />;
  if (productFounded === null) return <Loading />;
  if (!isLoading && productFounded === undefined) return <NoFoundPage />;
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minWidth: { xs: '70%', sm: '50%', md: '40%', lg: '30%' },
        gap: 2,
      }}
    >
      <Card sx={{ maxWidth: 345, padding: 3, marginBottom: 2 }}>
        <Typography variant="h6">
          <strong> {productFounded?.title}</strong>
        </Typography>
        <Typography sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <AddToCart productItem={productFounded!} />
        </Typography>
        <CardMedia
          sx={{ height: '100%vh', width: '100%', padding: 4 }}
          image={productFounded?.image}
          title={productFounded?.title}
          component="img"
        />
        <CardContent>
          <Typography variant="h6" component="div" sx={{ marginY: 2 }}>
            <strong> Category: </strong> {productFounded?.category}
          </Typography>
          <Typography variant="body1" sx={{ marginY: 2 }}>
            {productFounded?.description}
          </Typography>
          <Typography variant="body2">
            <strong> Price: </strong> {`$ ${productFounded?.price}`}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: 'inline-flex',
              alignContent: 'space-between',
              gap: 1,
              marginY: 2,
            }}
          >
            <strong>Rate:</strong> {productFounded?.rating.rate}{' '}
            <strong> Count: </strong> {productFounded?.rating.count}
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
    </Container>
  );
};
