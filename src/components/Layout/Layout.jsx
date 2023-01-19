import { Header } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@mui/material';
import Spiner from '../Spiner/Spiner';

export const Layout = () => {
  return (
    <>
      <Header />
      <Container sx={{ mt: '16px' }}>
        <Suspense fallback={<Spiner />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
