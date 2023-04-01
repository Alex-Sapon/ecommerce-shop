import { BsBag } from 'react-icons/bs';
import styled from 'styled-components';

type HeaderStyledProps = {
  isActive: boolean;
};

export const HeaderStyled = styled.header<HeaderStyledProps>`
  position: fixed;
  z-index: ${(props) => (props.isActive ? 10 : 0)};
  top: 0;
  width: 100%;
  transition: all 0.2s ease;
  background-color: ${(props) => {
    return props.isActive
      ? props.theme.color.headerSecondary
      : props.theme.color.headerPrimary;
  }};
  box-shadow: ${(props) => {
    return props.isActive ? props.theme.shadow.header : 'none';
  }};
`;

export const Wrapper = styled.div<HeaderStyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
  padding: ${(props) => {
    return props.isActive ? '16px 0 16px 0' : '13px 0 14px 0';
  }};

  a {
    width: 30px;
    height: 30px;
  }
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
  transition: all 0.2s ease;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19px;
  height: 19px;
  border-radius: 100%;
  transform: translate(40%, 35%);
  background-color: ${(props) => props.theme.color.quantity};
  font-size: ${(props) => props.theme.fontSize.text_xs};
  color: ${(props) => props.theme.color.primary};
`;
