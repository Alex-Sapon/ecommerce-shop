import { PATH } from 'constants/paths';

import { useContext, useEffect, useState } from 'react';

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
  const [isActive, setIsActive] = useState(false);

  const { calculation } = useContext(CartContext);
  const { handleClose } = useContext(SidebarContext);

  useEffect(() => {
    const scrollY = () => {
      return window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener('scroll', scrollY);

    return () => window.removeEventListener('scroll', scrollY);
  }, []);

  return (
    <HeaderStyled isActive={isActive}>
      <Container>
        <Wrapper isActive={isActive}>
          <Link to={PATH.HOME}>
            <HomeBtn src={Logo} />
          </Link>
          <BagWrapper>
            <BagBtn onClick={handleClose} />
            <Quantity>{calculation.amount}</Quantity>
          </BagWrapper>
        </Wrapper>
      </Container>
    </HeaderStyled>
  );
};
