import { PATH } from 'constants/paths';

import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <div>NotFound</div>
      <Link to={PATH.HOME} />
    </div>
  );
};

export default NotFound;
