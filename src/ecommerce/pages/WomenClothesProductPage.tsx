import { useFilterProductByCategory } from '../hooks/useFilterProductByCategory';
import { ProductCard } from '../components/ProductCard';
import { useSearchProductByTitle } from '../hooks/useSearchProductByTitle';
import { LoaderSkeleton } from '../components/NotProductLoadedSkeleton';

export const WomenClothesProductPage = () => {
  const { filteredProduct } = useFilterProductByCategory("women's clothing");

  const { searchProducts } = useSearchProductByTitle();
  const productListRender = () => {
    return searchProducts().length < 1 ? filteredProduct() : searchProducts();
  };

  return (
    <>
      {filteredProduct() ? (
        productListRender().map((productItem) => (
          <ProductCard key={productItem.id} productItem={productItem} />
        ))
      ) : (
        <LoaderSkeleton />
      )}
    </>
  );
};
