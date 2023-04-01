import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.footer};
  color: ${(props) => props.theme.color.primary};
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSize.text_sm};
  font-weight: ${(props) => props.theme.fontWeight.light};
`;
