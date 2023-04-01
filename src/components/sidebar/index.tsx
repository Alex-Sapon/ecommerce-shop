import { useContext } from 'react';

import { CartItem } from 'components/cartItem';
import {
  ButtonCheckout,
  ButtonView,
  CartList,
  Footer,
  GoBack,
  Header,
  PriceWrapper,
  Title,
  TotalPrice,
  Trash,
  Wrapper,
} from 'components/sidebar/styles';
import { CartContext } from 'contexts/CartContext';
import { SidebarContext } from 'contexts/SidebarContext';
import { FiTrash2 } from 'react-icons/fi';
import { formatCurrency } from 'utilities/formatCurrency';

export const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { amount, cart, clearCart } = useContext(CartContext);

  const handleClearCart = () => clearCart();

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
      <Footer>
        <PriceWrapper>
          <TotalPrice>Total: {formatCurrency(1000)}</TotalPrice>
          <Trash>
            <FiTrash2 onClick={handleClearCart} />
          </Trash>
        </PriceWrapper>
        <ButtonView handleClick={() => {}} />
        <ButtonCheckout handleClick={() => {}} />
      </Footer>
    </Wrapper>
  );
};
