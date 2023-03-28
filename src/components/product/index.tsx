import { useContext } from 'react';

import { Card } from 'components/card';
import { ProductList, Wrapper } from 'components/product/styles';
import { ProductContext } from 'contexts/ProductContext';

export const Product = () => {
  const { products } = useContext(ProductContext);

  return (
    <Wrapper>
      <ProductList>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ProductList>
    </Wrapper>
  );
};
