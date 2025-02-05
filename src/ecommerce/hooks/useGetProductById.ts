import { useState, useEffect } from 'react';
import { ProductEntity } from '../store/models/ProductEntity';
import { useSelectorAndDispatch } from './useSelectorAndDispatch';

export const useGetProductById = (id: number) => {
  const { products } = useSelectorAndDispatch();
  const { product } = products;

  const [productFounded, setProductFounded] = useState<ProductEntity | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      const foundProduct = product.find((p: ProductEntity) => p.id === +id);
      setProductFounded(foundProduct || null);
      setLoading(false);
    }
  }, [id, product]);

  return { productFounded, loading };
};
