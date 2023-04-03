import { useContext, useEffect, useState } from 'react';

import {
  Body,
  ButtonAdd,
  Description,
  Image,
  Price,
  Title,
  Wrapper,
} from 'components/details/styles';
import { Spinner } from 'components/spinner';
import { CartContext } from 'contexts/CartContext';
import { ProductContext, ProductsDataType } from 'contexts/ProductContext';
import { useParams } from 'react-router-dom';
import { formatCurrency } from 'utilities/formatCurrency';

export const Details = () => {
  const [product, setProduct] = useState({} as ProductsDataType);

  const { image, title, price, description } = product;

  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      setProduct(
        products.find((item) => item.id === parseInt(id, 10)) ||
          ({} as ProductsDataType)
      );
    }
  }, [products, id]);

  const handleAddToCart = () => addToCart(product);

  if (!product) return <Spinner />;

  return (
    <Wrapper>
      <Image src={image} />
      <Body>
        <Title>{title}</Title>
        <Price>{formatCurrency(price)}</Price>
        <Description>{description}</Description>
        <ButtonAdd onClick={handleAddToCart}>Add to cart</ButtonAdd>
      </Body>
    </Wrapper>
  );
};
