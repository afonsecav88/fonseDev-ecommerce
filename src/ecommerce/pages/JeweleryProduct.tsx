import { useFilterByCategory } from '../hooks/useFilterByCategory';

import { CardProduct } from '../components/CardProduct';
import { NotProductsLoaded } from '../components/NotProductsLoaded';

export const JeweleryProduct = () => {
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
