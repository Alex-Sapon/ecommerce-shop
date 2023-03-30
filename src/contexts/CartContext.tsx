import { createContext, useCallback, useMemo, useState } from 'react';

import { ProviderType } from 'components/types';
import { ProductsDataType } from 'contexts/ProductContext';

type CartContextType = {
  cart?: ProductsDataType[];
  addToCart: (product: ProductsDataType) => void;
  amount: number;
};

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: ProviderType) => {
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
    <CartContext.Provider value={memoizedContext}>
      {children}
    </CartContext.Provider>
  );
};
