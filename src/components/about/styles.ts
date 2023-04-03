import { PATH } from 'constants/paths';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: ${(props) => props.theme.color.about};
  height: 440px;
  padding-top: 20px;
  margin-bottom: 50px;

  @media (${(props) => props.theme.device.tablet}) {
    height: 800px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 480px;

  @media (${(props) => props.theme.device.tablet}) {
    height: 780px;
  }
`;

export const Text = styled.div`
  text-transform: uppercase;
  color: ${(props) => props.theme.color.secondary};
`;

export const Overhead = styled.span`
  position: relative;
  padding-left: 40px;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: ${(props) => props.theme.fontSize.text_sm};

  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: block;
    content: '';
    width: 30px;
    height: 2px;
    background-color: ${(props) => props.theme.color.line};
  }
`;

export const Title = styled.h1`
  font-weight: ${(props) => props.theme.fontWeight.light};
  font-size: ${(props) => props.theme.fontSize.text_3xl};
  line-height: ${(props) => props.theme.lineHeight.leading_tight};
  margin-bottom: 10px;

  b {
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
  }

  @media (${(props) => props.theme.device.tablet}) {
    font-size: ${(props) => props.theme.fontSize.text_5xl};
  }
`;

export const Subtitle = styled(Link).attrs({
  to: PATH.HOME,
})`
  color: ${(props) => props.theme.color.secondary};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: ${(props) => props.theme.fontSize.text_sm};
  border-bottom: 2px solid ${(props) => props.theme.color.secondary};
`;

export const Image = styled.img`
  display: none;
  height: 90%;

  @media (${(props) => props.theme.device.tablet}) {
    margin-top: auto;
    display: block;
  }
`;
