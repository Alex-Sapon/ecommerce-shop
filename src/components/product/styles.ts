import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 50px;
`;

export const ProductList = styled.ul`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(1, 1fr);

  @media (${(props) => props.theme.device.mobileL}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${(props) => props.theme.device.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (${(props) => props.theme.device.laptop}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
