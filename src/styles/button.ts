import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.text_sm};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  color: ${(props) => props.theme.color.primary};
  background-color: ${(props) => props.theme.color.secondary};
`;
