import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from '@mui/material';
import { Product } from '../../interfaces/interfaces';
import { AddToCart } from './AddToCart';
import { Link } from 'react-router-dom';

type PropsCardProduct = {
  productItem: Product;
};

export const CardProduct = ({ productItem }: PropsCardProduct) => {
  const { title, description, image, price, category, rating, id } =
    productItem;
  const { rate, count } = rating;

  if (!productItem) return null;

  return (
    <Card sx={{ maxWidth: 345, padding: 3, marginBottom: 2 }}>
      <Typography variant="h6">
        <strong> {title}</strong>
      </Typography>
      <Typography sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <AddToCart />
      </Typography>
      <br />
      <CardMedia
        sx={{ height: '100%vh', width: '100%', padding: 4 }}
        image={image}
        title={title}
        component="img"
      />
      <CardContent>
        <Typography variant="h6" component="div" sx={{ marginY: 2 }}>
          <strong> Category: </strong> {category}
        </Typography>
        <Typography variant="body1" sx={{ marginY: 2 }}>
          {description}
        </Typography>
        <Typography variant="body2">
          <strong> Price: </strong> {`$ ${price}`}
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
          <strong>Rate:</strong> {rate} <strong> Count: </strong> {count}
        </Typography>
      </CardContent>

      <Button
        variant="outlined"
        color="success"
        size="small"
        sx={{ float: 'right' }}
      >
        <Link style={{ fontSize: 'x-small' }} to={`/details/${id}`}>
          Details
        </Link>
      </Button>
    </Card>
  );
};
