import { useGetAllProducts } from '../../hooks/useGetAllProducts';
import { CardProduct } from './CardProduct';
import { NotProductsLoaded } from './NotProductsLoaded';

export const ListCardProduct = () => {
  const { isLoading, product } = useGetAllProducts();

  return (
    <>
      {!isLoading ? (
        product.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))
      ) : (
        <NotProductsLoaded />
      )}
    </>
  );
};
