import { ButtonStyled } from 'components/button/styles';

type ButtonProps = {
  text: string;
  handleClick: () => void;
};

export const Button = ({ text, handleClick }: ButtonProps) => {
  return <ButtonStyled onClick={handleClick}>{text}</ButtonStyled>;
};
