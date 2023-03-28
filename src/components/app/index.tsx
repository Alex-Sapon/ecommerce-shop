import { routes } from 'constants/routes';

import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { Sidebar } from 'components/sidebar';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'styles/container';

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          {routes.map(({ path, page }) => (
            <Route key={path} path={path} element={page} />
          ))}
        </Routes>
      </Container>
      <Sidebar />
      <Footer />
    </>
  );
};
