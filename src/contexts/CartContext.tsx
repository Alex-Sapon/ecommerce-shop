import { createContext, useCallback, useMemo, useState } from 'react';

import { ProviderType } from 'components/types';
import { ProductsDataType } from 'contexts/ProductContext';

type CartContextType = {
  cart?: ProductsDataType[];
  addToCart: (product: ProductsDataType) => void;
  removeFromCart: (id: number) => void;
  deleteProduct: (id: number) => void;
  clearCart: () => void;
  amount: number;
};

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: ProviderType) => {
  const [cart, setCart] = useState<ProductsDataType[]>([]);
  const [amount, setAmount] = useState(0);

  const addToCart = useCallback(
    (product: ProductsDataType) => {
      setCart(() => {
        if (cart.find((item) => item.id === product.id)) {
          return cart.map((item) => {
            return item.id === product.id
              ? { ...item, amount: item.amount + 1 }
              : item;
          });
        }
        return [...cart, { ...product, amount: 1 }];
      });

      setAmount(cart.reduce((acc, item) => acc + item.amount, 1));
    },
    [cart]
  );

  const deleteProduct = useCallback(
    (id: number) => {
      setCart(cart.filter((product) => product.id !== id));
      setAmount(cart.reduce((acc, item) => acc + item.amount, 0));
    },
    [cart]
  );

  const removeFromCart = useCallback(
    (id: number) => {
      const cartItem = cart.find((item) => item.id === id);

      if (cartItem) {
        const newCart = cart.map((item) => {
          return item.id === id
            ? {
                ...item,
                amount: item.amount > 1 ? item.amount - 1 : item.amount,
              }
            : item;
        });

        setCart(newCart);
      }

      if (cartItem && cartItem.amount < 2) {
        deleteProduct(id);
      }

      setAmount(cart.reduce((acc, item) => acc + item.amount, 1));
    },
    [cart, deleteProduct]
  );

  const clearCart = () => {
    setCart([]);
    setAmount(0);
  };

  const memoizedContext = useMemo(() => {
    return {
      addToCart,
      removeFromCart,
      deleteProduct,
      clearCart,
      cart,
      amount,
    };
  }, [addToCart, removeFromCart, deleteProduct, cart, amount]);

  return (
    <CartContext.Provider value={memoizedContext}>
      {children}
    </CartContext.Provider>
  );
};
