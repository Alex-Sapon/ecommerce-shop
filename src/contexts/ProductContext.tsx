import { createContext, useEffect, useMemo, useState } from 'react';

import { ProviderType } from 'types';

export type ProductContextType = {
  products: ProductsDataType[];
  loading: boolean;
  errorMessage: string | null;
};

export type ProductsDataType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  amount: number;
};

export const ProductContext = createContext({} as ProductContextType);

export const ProductProvider = ({ children }: ProviderType) => {
  const [products, setProducts] = useState<ProductsDataType[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const memoizedContext = useMemo(() => {
    return { products, errorMessage, loading };
  }, [products, errorMessage, loading]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await fetch('https://fakestoreapi.com/products');
      const data: ProductsDataType[] = await response.json();

      setProducts(
        data.filter(({ category }) => {
          return category.includes('men') || category.includes('women');
        })
      );

      setLoading(false);
    };

    fetchData().catch((error) => {
      setErrorMessage(error);
      setLoading(false);
    });
  }, []);

  return (
    <ProductContext.Provider value={memoizedContext}>
      {children}
    </ProductContext.Provider>
  );
};
