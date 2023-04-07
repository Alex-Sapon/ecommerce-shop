import { IoMdArrowForward } from 'react-icons/io';
import styled from 'styled-components';
import { Button } from 'styles/button';

export const Wrapper = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 900;
  padding: 30px;
  background-color: ${(props) => props.theme.color.primary};
  box-shadow: ${(props) => props.theme.shadow.sidebar};

  &.sidebar-enter {
    transform: translateX(100%);
  }

  &.sidebar-enter-active {
    transform: translateX(0);
    transition: all 300ms;
  }

  &.sidebar-exit {
    right: 0;
  }

  &.sidebar-exit-active {
    right: -100%;
    transition: all 1000ms;
  }

  @media (${(props) => props.theme.device.tablet}) {
    width: 50vw;
  }

  @media (${(props) => props.theme.device.laptop}) {
    width: 35vw;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.color.tertiary};
  padding-bottom: 20px;
`;

export const Title = styled.div`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSize.text_sm};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export const GoBack = styled(IoMdArrowForward)`
  font-size: ${(props) => props.theme.fontSize.text_lg};
  cursor: pointer;
`;

export const CartList = styled.ul`
  overflow-y: auto;
  overflow-x: hidden;
  margin: 30px 0 30px 0;
  padding-right: 5px;
  user-select: none;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.tertiary};
    border-radius: 20px;
  }
`;

export const Footer = styled.div``;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TotalPrice = styled.span`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSize.text_sm};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  color: ${(props) => props.theme.color.secondary};

  @media (${(props) => props.theme.device.mobileL}) {
    font-size: ${(props) => props.theme.fontSize.text_base};
  }
`;

export const Trash = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.text_lg};
  color: ${(props) => props.theme.color.primary};
  background-color: ${(props) => props.theme.color.trash};
`;

export const ButtonView = styled(Button)`
  margin: 10px 0;
  color: ${(props) => props.theme.color.secondary};
  background-color: ${(props) => props.theme.color.tertiary};
`;

export const ButtonCheckout = styled(Button)``;
