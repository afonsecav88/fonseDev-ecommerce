import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

export const CardProduct = ({ product }) => {
  return (
    <Card sx={{ minWidth: 100, border: '1px solid #1976D2' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          Hola
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="success" size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
