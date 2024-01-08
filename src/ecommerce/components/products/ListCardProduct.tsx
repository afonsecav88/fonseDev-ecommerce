import { useGetAllProducts } from '../../hooks/useGetAllProducts';
import { useSearchProductByTitle } from '../../hooks/useSearchProductByTitle';
import { CardProduct } from './CardProduct';
import { NotProductsLoaded } from './NotProductsLoaded';

export const ListCardProduct = () => {
  const { isLoading, product } = useGetAllProducts();
  const { searchTermValue, searchProducts } = useSearchProductByTitle();

  const productListRender = () => {
    return searchTermValue!.length < 1 ? product : searchProducts();
  };

  return (
    <>
      {!isLoading && productListRender().length !== 0 ? (
        productListRender().map((productItem) => (
          <CardProduct key={productItem.id} productItem={productItem} />
        ))
      ) : (
        <NotProductsLoaded />
      )}
    </>
  );
};
