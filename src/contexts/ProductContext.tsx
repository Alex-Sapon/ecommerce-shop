import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

export type ProductContextType = {
  products: ProductsDataType[];
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
};

export type ProductProviderType = {
  children: ReactNode;
};

export const ProductContext = createContext({} as ProductContextType);

export const ProductProvider = ({ children }: ProductProviderType) => {
  const [products, setProducts] = useState<ProductsDataType[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const memoizedContext = useMemo(() => {
    return { products, errorMessage };
  }, [products, errorMessage]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data: ProductsDataType[] = await response.json();

      setProducts(
        data.filter(({ category }) => {
          return category.includes('men') || category.includes('women');
        })
      );
    };

    fetchData().catch((error) => {
      setErrorMessage(error);
    });
  }, []);

  return (
    <ProductContext.Provider value={memoizedContext}>
      {children}
    </ProductContext.Provider>
  );
};
