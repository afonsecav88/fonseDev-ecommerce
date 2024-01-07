import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
export const AddToCart = () => {
  return (
    <>
      <Button variant="outlined">
        {' '}
        <AddIcon titleAccess="Add to Cart" color="primary" />
      </Button>
    </>
  );
};
