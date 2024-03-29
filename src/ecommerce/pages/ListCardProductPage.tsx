import { useGetAllProducts } from '../hooks/useGetAllProducts';
import { useSearchProductByTitle } from '../hooks/useSearchProductByTitle';
import { ProductCard } from '../components/ProductCard';
import { ProductEntity } from '../store/models/ProductEntity';
import { LoaderSkeleton } from '../components/NotProductLoadedSkeleton';
import { useEffect } from 'react';

export const ListCardProductPage = () => {
  const { isLoading, product } = useGetAllProducts();
  const { searchProducts } = useSearchProductByTitle();

  useEffect(() => {
    product;
  }, [product]);

  const productListRender = () => {
    return searchProducts().length < 1 ? product : searchProducts();
  };

  return (
    <>
      {!isLoading && productListRender().length !== 0 ? (
        productListRender().map((productItem: ProductEntity) => (
          <ProductCard key={productItem.id} productItem={productItem} />
        ))
      ) : (
        <LoaderSkeleton />
      )}
    </>
  );
};
