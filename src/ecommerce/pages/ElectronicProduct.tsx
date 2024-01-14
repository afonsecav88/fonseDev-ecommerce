import { useFilterByCategory } from '../hooks/useFilterByCategory';
import { CardProduct } from '../components/CardProduct';
import { NotProductsLoaded } from '../components/NotProductsLoaded';

export const ElectronicProduct = () => {
  const { filteredProduct } = useFilterByCategory('electronics');

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
