import { useContext } from 'react';

import {
  Wrapper,
  Image,
  Body,
  Increment,
  Title,
  Counter,
  Decrement,
  Price,
  TotalPrice,
  Remove,
  Amount,
  Header,
  Footer,
} from 'components/cartItem/styles';
import { CartContext } from 'contexts/CartContext';
import { ProductsDataType } from 'contexts/ProductContext';
import { Link } from 'react-router-dom';

type CartItemProps = {
  product: ProductsDataType;
};

export const CartItem = ({ product }: CartItemProps) => {
  const { id, amount, title, image, price } = product;

  const { addToCart, removeFromCart, deleteProduct } = useContext(CartContext);

  const handleAddToCart = () => addToCart(product);

  const handleRemoveFromCart = () => removeFromCart(id);

  const handleDeleteProduct = () => deleteProduct(id);

  return (
    <Wrapper>
      <Link to={`/product/${id}`}>
        <Image src={image} />
      </Link>
      <Body>
        <Header>
          <Link to={`/product/${id}`}>
            <Title>{title}</Title>
          </Link>
          <Remove onClick={handleDeleteProduct} />
        </Header>
        <Footer>
          <Counter>
            <Decrement onClick={handleRemoveFromCart} />
            <Amount>{amount}</Amount>
            <Increment onClick={handleAddToCart} />
          </Counter>
          <Price>$ {price}</Price>
          <TotalPrice>
            $ {parseFloat(String(amount * price)).toFixed(2)}
          </TotalPrice>
        </Footer>
      </Body>
    </Wrapper>
  );
};
