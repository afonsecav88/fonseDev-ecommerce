import { useFilterByCategory } from '../../hooks/useFilterByCategory';
import { CardProduct } from './CardProduct';
import { NotProductsLoaded } from './NotProductsLoaded';

export const ElectronicProduct = () => {
  const { product, isLoading } = useFilterByCategory('electronics');
  return (
    <>
      {!isLoading ? (
        product.map((productItem) => (
          <CardProduct key={productItem.id} productItem={productItem} />
        ))
      ) : (
        <NotProductsLoaded />
      )}
    </>
  );
};
