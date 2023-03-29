import { createContext, ReactNode, useMemo, useState } from 'react';

import { ProductsDataType } from 'contexts/ProductContext';

type ProviderProps = {
  children: ReactNode;
};

type CardContextType = {
  cart?: ProductsDataType[];
  addToCart: (product: ProductsDataType) => void;
};

export const CardContext = createContext({} as CardContextType);

export const CardProvider = ({ children }: ProviderProps) => {
  const [cart, setCart] = useState<ProductsDataType[]>([]);

  const addToCart = (product: ProductsDataType) => {
    setCart((prevCart) => {
      if (prevCart.find((item) => item.id === product.id)) {
        return prevCart.map((item) => {
          return item.id === product.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });
      }
      return [...prevCart, { ...product, amount: 1 }];
    });
  };

  const memoizedContext = useMemo(() => {
    return { addToCart };
  }, []);

  return (
    <CardContext.Provider value={memoizedContext}>
      {children}
    </CardContext.Provider>
  );
};
