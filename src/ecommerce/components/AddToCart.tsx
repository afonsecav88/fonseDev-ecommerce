import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { useSelectorAndDispatch } from '../hooks/useSelectorAndDispatch';
import { ProductEntity } from '../store/models/ProductEntity';
import { decrementProduct } from '../store/productSlice';
import { addProduct } from '../store/cartSlice';

interface AddToCartProps {
  productItem: ProductEntity;
}

export const AddToCart = ({ productItem }: AddToCartProps) => {
  const { dispatch } = useSelectorAndDispatch();

  if (!productItem) return;

  const { id, price, title, image, rating } = productItem;
  const { count } = rating;

  const handleClick = () => {
    dispatch(decrementProduct(id));
    dispatch(addProduct({ id, price, title, image, count }));
  };

  return (
    <>
      <Button onClick={() => handleClick()} variant="outlined">
        {' '}
        <AddIcon titleAccess="Add to Cart" color="primary" />
      </Button>
    </>
  );
};
