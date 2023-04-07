import { PATH } from 'constants/paths';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: -70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;
  height: 100vh;
  color: ${(props) => props.theme.color.secondary};
`;

export const Title = styled.h2`
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-size: ${(props) => props.theme.fontSize.text_xl};
`;

export const LinkStyled = styled(Link).attrs({
  to: PATH.HOME,
})`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  transition: color 0.3s ease;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-size: ${(props) => props.theme.fontSize.text_base};
  color: ${(props) => props.theme.color.secondary};

  &:hover {
    color: ${(props) => props.theme.color.close};
  }
`;
