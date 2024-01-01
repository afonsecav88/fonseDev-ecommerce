import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from '@mui/material';

export const CardProduct = ({ product }) => {
  const { title, description, image, price, category, rating } = product;
  const { rate, count } = rating;

  return (
    <Card sx={{ maxWidth: 345, padding: 3, marginBottom: 2 }}>
      <Typography variant="h6">
        <strong> {title}</strong>
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
      <CardActions>
        <Button variant="contained" color="success" size="small">
          Details
        </Button>
      </CardActions>
    </Card>
  );
};
