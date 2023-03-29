import { useContext } from 'react';

import {
  Buttons,
  Detail,
  Img,
  ImgWrapper,
  Plus,
  Title,
  Text,
  Wrapper,
} from 'components/card/styles';
import { CardContext } from 'contexts/CardContext';
import { ProductsDataType } from 'contexts/ProductContext';
import { BsEyeFill, BsPlus } from 'react-icons/bs';

type CardProps = {
  product: ProductsDataType;
};

export const Card = ({ product }: CardProps) => {
  const { id, category, title, image, price } = product;

  const { addToCart } = useContext(CardContext);

  const handleAddToCart = () => addToCart(product);

  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={image} />
      </ImgWrapper>
      <Title>{category}</Title>
      <Text>{title}</Text>
      <Text>$ {price}</Text>
      <Buttons>
        <Plus>
          <BsPlus onClick={handleAddToCart} />
        </Plus>
        <Detail to={`/product/${id}`}>
          <BsEyeFill />
        </Detail>
      </Buttons>
    </Wrapper>
  );
};
