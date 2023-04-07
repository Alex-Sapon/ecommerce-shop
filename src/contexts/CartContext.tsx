import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { ProductsDataType } from 'contexts/ProductContext';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { ProviderType } from 'types';

type CartContextType = {
  cart: ProductsDataType[];
  addToCart: (product: ProductsDataType) => void;
  removeFromCart: (id: number) => void;
  deleteProduct: (id: number) => void;
  clearCart: () => void;
  calculation: { amount: number; total: number };
};

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: ProviderType) => {
  const [cart, setCart] = useLocalStorage<ProductsDataType[]>(
    'ecommerce-shop-cart',
    []
  );

  const [calculation, setCalculation] = useState({ amount: 0, total: 0 });

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
    },
    [cart, setCart]
  );

  const deleteProduct = useCallback(
    (id: number) => {
      setCart(cart.filter((product) => product.id !== id));
    },
    [cart, setCart]
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
    },
    [cart, deleteProduct, setCart]
  );

  const clearCart = useCallback(() => setCart([]), [setCart]);

  const memoizedContext = useMemo(() => {
    return {
      addToCart,
      removeFromCart,
      deleteProduct,
      clearCart,
      cart,
      calculation,
    };
  }, [addToCart, removeFromCart, deleteProduct, clearCart, cart, calculation]);

  useEffect(() => {
    setCalculation({
      amount: cart.reduce((acc, item) => acc + item.amount, 0),
      total: cart.reduce((acc, item) => acc + item.amount * item.price, 0),
    });
  }, [cart]);

  return (
    <CartContext.Provider value={memoizedContext}>
      {children}
    </CartContext.Provider>
  );
};
