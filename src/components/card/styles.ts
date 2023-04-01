import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.li`
  display: grid;
  row-gap: 5px;
  position: relative;
  overflow: hidden;
  user-select: none;
`;

export const Img = styled.img`
  max-height: 160px;
  object-fit: cover;
  transition: transform 0.4s ease;
`;

export const Buttons = styled.div`
  position: absolute;
  top: 20px;
  right: -100px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  opacity: 0;
  transition: all 0.4s ease;

  &:hover {
    right: 20px;
    opacity: 1;
  }
`;

export const Plus = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSize.text_2xl};
  color: ${(props) => props.theme.color.primary};
  background-color: ${(props) => props.theme.color.plus};
  cursor: pointer;
`;

export const Detail = styled(Link)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => props.theme.color.secondary};
  background-color: ${(props) => props.theme.color.primary};
  box-shadow: ${(props) => props.theme.shadow.details};
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid #e4e4e4;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 10px;

  &:hover ${Img} {
    transform: scale(1.1);
  }

  &:hover ~ ${Buttons} {
    right: 20px;
    opacity: 1;
  }
`;

export const Title = styled.h2`
  text-transform: capitalize;
  font-size: ${(props) => props.theme.fontSize.text_base};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.color.tertiary};
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSize.text_sm};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  color: ${(props) => props.theme.color.secondary};
`;
