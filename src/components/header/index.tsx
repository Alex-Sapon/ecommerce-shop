import { PATH } from 'constants/paths';

import { useContext } from 'react';

import Logo from 'assets/img/logo.svg';
import { CartContext } from 'contexts/CartContext';
import { SidebarContext } from 'contexts/SidebarContext';
import { Link } from 'react-router-dom';
import { Container } from 'styles/container';

import {
  BagBtn,
  BagWrapper,
  HeaderStyled,
  HomeBtn,
  Quantity,
  Wrapper,
} from './styles';

export const Header = () => {
  const { amount } = useContext(CartContext);
  const { handleClose } = useContext(SidebarContext);

  return (
    <HeaderStyled>
      <Container>
        <Wrapper>
          <Link to={PATH.HOME}>
            <HomeBtn src={Logo} />
          </Link>
          <BagWrapper>
            <BagBtn onClick={handleClose} />
            <Quantity>{amount}</Quantity>
          </BagWrapper>
        </Wrapper>
      </Container>
    </HeaderStyled>
  );
};
