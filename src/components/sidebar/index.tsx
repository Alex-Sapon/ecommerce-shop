import { useContext } from 'react';

import { CartItem } from 'components/cartItem';
import {
  Wrapper,
  Header,
  Title,
  GoBack,
  CartList,
} from 'components/sidebar/styles';
import { CartContext } from 'contexts/CartContext';
import { SidebarContext } from 'contexts/SidebarContext';

export const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { amount, cart } = useContext(CartContext);

  if (!isOpen) return null;

  return (
    <Wrapper>
      <Header>
        <Title>{`Shopping Bag (${amount})`}</Title>
        <GoBack onClick={handleClose} />
      </Header>
      <CartList>
        {cart?.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </CartList>
    </Wrapper>
  );
};
