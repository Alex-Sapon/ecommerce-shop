import {
  Img,
  Wrapper,
  ImgWrapper,
  Text,
  Subtitle,
  Buttons,
  Plus,
  Detail,
} from 'components/card/styles';
import { ProductsDataType } from 'contexts/ProductContext';
import { Link } from 'react-router-dom';

type CardProps = {
  product: ProductsDataType;
};

export const Card = ({ product }: CardProps) => {
  const { id, category, title, image, price } = product;

  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={image} />
      </ImgWrapper>
      <Subtitle>{category}</Subtitle>
      <Text>{title}</Text>
      <Text>$ {price}</Text>
      <Buttons>
        <Plus />
        <Link to={`/products:${id}`}>
          <Detail />
        </Link>
      </Buttons>
    </Wrapper>
  );
};
