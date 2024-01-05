import { useFilterByCategory } from '../../hooks/useFilterByCategory';
import { CardProduct } from './CardProduct';
import { NotProductsLoaded } from './NotProductsLoaded';

export const WomenClothesProduct = () => {
  const { filteredProduct } = useFilterByCategory('jewelery');

  return (
    <>
      {filteredProduct() ? (
        filteredProduct().map((productItem) => (
          <CardProduct key={productItem.id} productItem={productItem} />
        ))
      ) : (
        <NotProductsLoaded />
      )}
    </>
  );
};
