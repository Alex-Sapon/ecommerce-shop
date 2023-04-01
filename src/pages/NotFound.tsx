import { PATH } from 'constants/paths';

import { Link } from 'react-router-dom';
import { Container } from 'styles/container';

const NotFound = () => {
  return (
    <Container>
      <div>
        <div>NotFound</div>
        <Link to={PATH.HOME} />
      </div>
    </Container>
  );
};

export default NotFound;
