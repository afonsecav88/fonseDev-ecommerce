import { useFilterProductByCategory } from '../hooks/useFilterProductByCategory';
import { CardProduct } from '../components/CardProduct';
import { NotProductsLoaded } from '../components/NotProductsLoaded';
import { useSearchProductByTitle } from '../hooks/useSearchProductByTitle';
import { ProductEntity } from '../store/models/ProductEntity';

export const ElectronicProduct = () => {
  const { filteredProduct } = useFilterProductByCategory('electronics');
  const { searchProducts } = useSearchProductByTitle();

  const productListRender = () => {
    return searchProducts().length < 1 ? filteredProduct() : searchProducts();
  };

  return (
    <>
      {filteredProduct() ? (
        productListRender().map((productItem: ProductEntity) => (
          <CardProduct key={productItem.id} productItem={productItem} />
        ))
      ) : (
        <NotProductsLoaded />
      )}
    </>
  );
};
