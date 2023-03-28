import { BsPlus, BsEyeFill } from 'react-icons/bs';
import styled from 'styled-components';

export const Wrapper = styled.li`
  display: grid;
  row-gap: 5px;
  position: relative;
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

  &:hover img {
    transform: scale(1.1);
  }
`;

export const Img = styled.img`
  max-height: 160px;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

export const Subtitle = styled.h2`
  text-transform: capitalize;
  font-size: ${(props) => props.theme.fontSize.text_base};
  color: ${(props) => props.theme.color.tertiary};
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSize.text_sm};
  color: ${(props) => props.theme.color.secondary};
`;

export const Buttons = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 80px;
  background-color: indianred;
  display: flex;
  flex-direction: column;
  opacity: 0;
`;

export const Plus = styled(BsPlus)``;

export const Detail = styled(BsEyeFill)`
  background-color: ${(props) => props.theme.color.primary};
`;
