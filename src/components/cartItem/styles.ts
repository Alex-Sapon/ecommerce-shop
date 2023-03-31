import { FiMinus, FiPlus } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';
import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  column-gap: 20px;
  padding: 30px 10px;
  border-bottom: 1px solid ${(props) => props.theme.color.tertiary};

  a {
    color: ${(props) => props.theme.color.secondary};
  }
`;

export const Image = styled.img`
  width: 70px;
  object-fit: cover;
`;

export const Body = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 20px;
  column-gap: 20px;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSize.text_sm};
  font-weight: ${(props) => props.theme.fontWeight.medium};

  &:hover {
    text-decoration: underline;
  }
`;

export const Counter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  width: 100px;
  padding: 3px 5px;
  border: 1px solid ${(props) => props.theme.color.tertiary};
`;

export const Amount = styled.span`
  margin: 0 auto;
`;

export const Decrement = styled(FiMinus)`
  margin: 0 auto;
  cursor: pointer;
`;

export const Increment = styled(FiPlus)`
  margin: 0 auto;
  cursor: pointer;
`;

export const Price = styled.span`
  color: ${(props) => props.theme.color.tertiary};
  font-size: ${(props) => props.theme.fontSize.text_sm};
`;

export const TotalPrice = styled.span`
  margin-left: auto;
  color: ${(props) => props.theme.color.secondary};
  font-size: ${(props) => props.theme.fontSize.text_sm};
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;

export const Remove = styled(RiCloseFill)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-left: auto;
  transition: all 0.3s ease;
  color: ${(props) => props.theme.color.tertiary};

  &:hover {
    color: ${(props) => props.theme.color.close};
    transform: scale(1.2);
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;
