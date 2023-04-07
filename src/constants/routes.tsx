import { PATH } from 'constants/paths';

import React from 'react';

import { Home } from 'pages/Home';

const ProductDetails = React.lazy(() => import('pages/ProductDetails'));
const NotFound = React.lazy(() => import('pages/NotFound'));

export const routes = [
  { path: PATH.HOME, page: <Home /> },
  { path: PATH.PRODUCT, page: <ProductDetails /> },
  { path: PATH.NOT_FOUND, page: <NotFound /> },
];
