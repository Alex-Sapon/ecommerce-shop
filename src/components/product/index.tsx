import { useContext } from 'react';

import { Card } from 'components/card';
import { ProductList, Wrapper } from 'components/product/styles';
import { Spinner } from 'components/spinner';
import { ProductContext } from 'contexts/ProductContext';
import { Container } from 'styles/container';

export const Product = () => {
  const { products, loading } = useContext(ProductContext);

  if (loading) return <Spinner />;

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
