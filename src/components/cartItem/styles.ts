import { FiMinus, FiPlus } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';
import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  column-gap: 20px;
  padding: 30px 0;
  border-bottom: 1px solid ${(props) => props.theme.color.tertiary};

  a {
    color: ${(props) => props.theme.color.secondary};
  }

  @media (${(props) => props.theme.device.mobileL}) {
    padding: 30px 10px;
  }
`;

export const Image = styled.img`
  width: 50px;
  object-fit: cover;

  @media (${(props) => props.theme.device.mobileL}) {
    width: 70px;
  }
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
  font-size: ${(props) => props.theme.fontSize.text_xs};
  font-weight: ${(props) => props.theme.fontWeight.medium};

  &:hover {
    text-decoration: underline;
  }

  @media (${(props) => props.theme.device.mobileL}) {
    font-size: ${(props) => props.theme.fontSize.text_sm};
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  font-size: ${(props) => props.theme.fontSize.text_xs};

  @media (${(props) => props.theme.device.mobileL}) {
    font-size: ${(props) => props.theme.fontSize.text_sm};
  }
`;

export const Counter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  width: 90px;
  height: 30px;
  border: 1px solid ${(props) => props.theme.color.tertiary};

  @media (${(props) => props.theme.device.mobileL}) {
    width: 100px;
    height: 35px;
  }
`;

export const Amount = styled.span`
  margin: 0 auto;
`;

export const Decrement = styled(FiMinus)`
  margin: 0 auto;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.text_base};

  @media (${(props) => props.theme.device.mobileL}) {
    font-size: ${(props) => props.theme.fontSize.text_lg};
  }
`;

export const Increment = styled(FiPlus)`
  margin: 0 auto;
  cursor: pointer;

  @media (${(props) => props.theme.device.mobileL}) {
    font-size: ${(props) => props.theme.fontSize.text_lg};
  }
`;

export const Price = styled.span`
  color: ${(props) => props.theme.color.tertiary};
`;

export const TotalPrice = styled.span`
  margin-left: auto;
  color: ${(props) => props.theme.color.secondary};
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
