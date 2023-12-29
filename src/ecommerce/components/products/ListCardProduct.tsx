import { useGetAllProducts } from '../../hooks/useGetAllProducts';
import { CardProduct } from './CardProduct';
import { NotProductsLoaded } from './NotProductsLoaded';

export const ListCardProduct = () => {
  const { isLoading, product } = useGetAllProducts();

  return (
    <>
      {!isLoading ? (
        product.map(({ id }) => <CardProduct key={id} product={product} />)
      ) : (
        <NotProductsLoaded />
      )}
    </>
  );
};
