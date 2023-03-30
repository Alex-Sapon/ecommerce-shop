import { useContext } from 'react';

import {
  Wrapper,
  Header,
  Title,
  GoBack,
  ProductList,
  ProductItem,
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
      <ProductList>
        {cart?.map((item) => (
          <ProductItem key={item.id}>{item.title}</ProductItem>
        ))}
      </ProductList>
    </Wrapper>
  );
};
