import { routes } from 'constants/routes';

import { Suspense } from 'react';

import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { Sidebar } from 'components/sidebar';
import { Spinner } from 'components/spinner';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          {routes.map(({ path, page }) => (
            <Route key={path} path={path} element={page} />
          ))}
        </Routes>
      </Suspense>
      <Sidebar />
      <Footer />
    </>
  );
};
