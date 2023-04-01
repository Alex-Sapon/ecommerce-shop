import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.text_xs};
  color: ${(props) => props.theme.color.primary};
  background-color: ${(props) => props.theme.color.secondary};
`;
