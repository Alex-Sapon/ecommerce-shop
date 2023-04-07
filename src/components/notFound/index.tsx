import { Title, Wrapper, LinkStyled } from 'components/notFound/styles';
import { FaHome } from 'react-icons/fa';

export const NotFoundPage = () => (
  <Wrapper>
    <Title>Page not found...</Title>
    <LinkStyled>
      Go home <FaHome />
    </LinkStyled>
  </Wrapper>
);
