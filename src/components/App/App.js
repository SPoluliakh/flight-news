import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

const ArticlePage = lazy(() =>
  import('../../Pages/ArticlePage/ArticlePage').then(module => ({
    ...module,
    default: module.ArticlePage,
  }))
);

const HomePage = lazy(() =>
  import('../../Pages/HomePage/HomePage').then(module => ({
    ...module,
    default: module.HomePage,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="articlePage/:id" element={<ArticlePage />} />
      </Route>
    </Routes>
  );
};
