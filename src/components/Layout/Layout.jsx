import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Spiner from '../Spiner/Spiner';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Spiner />}>
        <Outlet />
      </Suspense>
    </>
  );
};
