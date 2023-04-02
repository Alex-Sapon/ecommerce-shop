import styled from 'styled-components';
import { Button } from 'styles/button';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: -70px;
  row-gap: 50px;
  height: 100vh;

  @media (${(props) => props.theme.device.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    column-gap: 50px;
  }
`;

export const Image = styled.img`
  max-width: 250px;

  @media (${(props) => props.theme.device.tablet}) {
    max-width: 300px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${(props) => props.theme.fontSize.text_sm};
`;

export const Title = styled.h2`
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: ${(props) => props.theme.fontSize.text_xl};
`;

export const Price = styled.span`
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  color: ${(props) => props.theme.color.detailsPrice};
`;

export const Description = styled.p``;

export const ButtonAdd = styled(Button)`
  width: 120px;
`;
