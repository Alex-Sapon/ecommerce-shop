import { useContext } from 'react';

import { Card } from 'components/card';
import { ProductList, Wrapper } from 'components/product/styles';
import { ProductContext } from 'contexts/ProductContext';
import { Container } from 'styles/container';

export const Product = () => {
  const { products } = useContext(ProductContext);

  return (
    <Container>
      <Wrapper>
        <ProductList>
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </ProductList>
      </Wrapper>
    </Container>
  );
};
