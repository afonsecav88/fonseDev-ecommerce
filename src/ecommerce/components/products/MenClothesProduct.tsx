import { useFilterByCategory } from '../../hooks/useFilterByCategory';
import { CardProduct } from './CardProduct';
import { NotProductsLoaded } from './NotProductsLoaded';

export const MenClothesProduct = () => {
  const { filteredProduct } = useFilterByCategory("men's clothing");

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
