import { useFilterByCategory } from '../../hooks/useFilterByCategory';
import { PropsCategory } from '../../interfaces/interfaces';
import { CardProduct } from './CardProduct';
import { NotProductsLoaded } from './NotProductsLoaded';

export const JeweleryProduct = ({ name }: PropsCategory) => {
  const { filteredProduct } = useFilterByCategory(name);

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
