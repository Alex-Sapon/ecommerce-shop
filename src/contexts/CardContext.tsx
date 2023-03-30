import { createContext, useCallback, useMemo, useState } from 'react';

import { ProviderType } from 'components/types';
import { ProductsDataType } from 'contexts/ProductContext';

type CardContextType = {
  cart?: ProductsDataType[];
  addToCart: (product: ProductsDataType) => void;
  amount: number;
};

export const CardContext = createContext({} as CardContextType);

export const CardProvider = ({ children }: ProviderType) => {
  const [cart, setCart] = useState<ProductsDataType[]>([]);
  const [amount, setAmount] = useState(0);

  const addToCart = useCallback(
    (product: ProductsDataType) => {
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

      setAmount(cart.reduce((acc, item) => acc + item.amount, 1));
    },
    [cart]
  );

  const memoizedContext = useMemo(() => {
    return { addToCart, cart, amount };
  }, [addToCart, cart, amount]);

  return (
    <CardContext.Provider value={memoizedContext}>
      {children}
    </CardContext.Provider>
  );
};
