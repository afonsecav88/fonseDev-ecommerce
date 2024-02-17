import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { ProductEntity } from '../store/models/ProductEntity';
import { useAddToCart } from '../hooks/useAddToCart';
interface AddToCartProps {
  productItem: ProductEntity;
}

export const AddToCart = ({ productItem }: AddToCartProps) => {
  const { handleClick } = useAddToCart();

  if (!productItem) return;

  return (
    <>
      <Button onClick={() => handleClick(productItem)} variant="outlined">
        {' '}
        <AddIcon titleAccess="Add to Cart" color="primary" />
      </Button>
    </>
  );
};
