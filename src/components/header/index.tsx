import { PATH } from 'constants/paths';

import Logo from 'assets/img/logo.svg';
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
  return (
    <HeaderStyled>
      <Container>
        <Wrapper>
          <Link to={PATH.HOME}>
            <HomeBtn src={Logo} />
          </Link>
          <BagWrapper>
            <BagBtn />
            <Quantity>0</Quantity>
          </BagWrapper>
        </Wrapper>
      </Container>
    </HeaderStyled>
  );
};
