import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

import { fetchProducts, ProductsDataType } from 'api/apiFakeStore';

type ProductContextType = {
  products: ProductsDataType[];
};

type ProductProviderType = {
  children: ReactNode;
};

export const ProductContext = createContext({} as ProductContextType);

export const ProductProvider = ({ children }: ProductProviderType) => {
  const [products, setProducts] = useState<ProductsDataType[]>([]);

  const memoizedContext = useMemo(() => ({ products }), [products]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(
        (data as ProductsDataType[]).filter((item) => {
          return (
            item.title === 'men"s clothing' || item.title === 'women"s clothing'
          );
        })
      );
    });
  }, []);

  return (
    <ProductContext.Provider value={memoizedContext}>
      {children}
    </ProductContext.Provider>
  );
};
