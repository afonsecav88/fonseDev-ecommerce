import { useGetAllProducts } from '../hooks/useGetAllProducts';
import { useSearchProductByTitle } from '../hooks/useSearchProductByTitle';
import { CardProduct } from '../components/CardProduct';
import { NotProductsLoaded } from '../components/NotProductsLoaded';
import { ProductEntity } from '../store/models/ProductEntity';

export const ListCardProduct = () => {
  const { isLoading, product } = useGetAllProducts();
  const { searchTermValue, searchProducts } = useSearchProductByTitle();

  const productListRender = () => {
    return searchTermValue!.length < 1 ? product : searchProducts();
  };

  console.log(searchProducts(), searchTermValue);
  return (
    <>
      {!isLoading && productListRender().length !== 0 ? (
        productListRender().map((productItem: ProductEntity) => (
          <CardProduct key={productItem.id} productItem={productItem} />
        ))
      ) : (
        <NotProductsLoaded />
      )}
    </>
  );
};
