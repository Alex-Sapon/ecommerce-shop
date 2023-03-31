import { FiTrash2 } from 'react-icons/fi';
import { IoMdArrowForward } from 'react-icons/io';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100%;
  background-color: ${(props) => props.theme.color.primary};
  transition: all 0.3s ease;
  z-index: 300;
  padding: 30px;
  box-shadow: ${(props) => props.theme.shadow.sidebar};

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

export const CartList = styled.ul``;

export const Trash = styled(FiTrash2)``;
