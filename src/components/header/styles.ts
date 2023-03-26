import { BsBag } from 'react-icons/bs';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding: 15px 0;
  background-color: ${(props) => props.theme.color.primary};
  position: sticky;
  box-shadow: ${(props) => props.theme.shadow.header};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HomeBtn = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const BagWrapper = styled.div`
  position: relative;
`;

export const BagBtn = styled(BsBag)`
  font-size: ${(props) => props.theme.fontSize.text_2xl};
  cursor: pointer;
`;

export const Quantity = styled.span`
  position: absolute;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19px;
  height: 19px;
  border-radius: 100%;
  background-color: #ea3b3b;
  font-size: ${(props) => props.theme.fontSize.text_xs};
  color: ${(props) => props.theme.color.primary};
  transform: translate(40%, 35%);
  bottom: 0;
  right: 0;
`;
