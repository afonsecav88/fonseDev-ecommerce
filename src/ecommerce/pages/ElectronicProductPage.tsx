import { useFilterProductByCategory } from '../hooks/useFilterProductByCategory';
import { ProductCard } from '../components/ProductCard';
import { useSearchProductByTitle } from '../hooks/useSearchProductByTitle';
import { ProductEntity } from '../store/models/ProductEntity';
import { LoaderSkeleton } from '../components/NotProductLoadedSkeleton';

export const ElectronicProductPage = () => {
  const { filteredProduct } = useFilterProductByCategory('electronics');
  const { searchProducts } = useSearchProductByTitle();

  const productListRender = () => {
    return searchProducts().length < 1 ? filteredProduct() : searchProducts();
  };

  return (
    <>
      {filteredProduct() ? (
        productListRender().map((productItem: ProductEntity) => (
          <ProductCard key={productItem.id} productItem={productItem} />
        ))
      ) : (
        <LoaderSkeleton />
      )}
    </>
  );
};
