import { useFilterByCategory } from '../hooks/useFilterByCategory';

import { CardProduct } from '../components/CardProduct';
import { NotProductsLoaded } from '../components/NotProductsLoaded';
import { useSearchProductByTitle } from '../hooks/useSearchProductByTitle';

export const JeweleryProduct = () => {
  const { filteredProduct } = useFilterByCategory('jewelery');
  const { searchProducts } = useSearchProductByTitle();

  const productListRender = () => {
    return searchProducts().length < 1 ? filteredProduct() : searchProducts();
  };

  return (
    <>
      {filteredProduct() ? (
        productListRender().map((productItem) => (
          <CardProduct key={productItem.id} productItem={productItem} />
        ))
      ) : (
        <NotProductsLoaded />
      )}
    </>
  );
};
