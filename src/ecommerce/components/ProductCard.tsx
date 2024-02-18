import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  CardActions,
} from '@mui/material';
import { AddToCart } from './AddToCart';
import { useNavigate } from 'react-router-dom';
import { ProductEntity } from '../store/models/ProductEntity';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface CardProductProps {
  productItem: ProductEntity;
}

export const ProductCard = ({ productItem }: CardProductProps) => {
  const navigate = useNavigate();
  const { title, description, image, price, category, rating, id } =
    productItem;
  const { rate, count } = rating;

  if (!productItem) return;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 345,
        maxHeight: 660,
        padding: 4,
        marginBottom: 2,
      }}
    >
      <Typography sx={{ minHeight: '80px', marginBottom: 2 }} variant="h6">
        <strong> {title}</strong>
      </Typography>
      <CardMedia
        sx={{
          display: 'flex',
          width: '50%',
          minHeight: '30%',
          paddingTop: '10.25%',
        }}
        image={image}
        title={title}
        alt={title}
        component="img"
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{ marginY: 2, minHeight: '50px' }}
        >
          <strong> Category: </strong> {category}
        </Typography>
        <Typography
          className="cart-description-truncate"
          variant="body1"
          sx={{ marginY: 2, minHeight: '87px' }}
        >
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
      <CardActions sx={{ display: 'flex', gap: 6, paddingBottom: 2 }}>
        <AddToCart productItem={productItem} />
        <Button
          variant="contained"
          color="success"
          size="small"
          sx={{ float: 'right' }}
          onClick={() => navigate(`details/${id}`)}
          startIcon={<ArrowForwardIcon />}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};
