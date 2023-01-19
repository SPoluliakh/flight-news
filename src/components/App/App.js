import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'Pages/HomePage/HomePage';
import { Layout } from 'components/Layout/Layout';
// import { ArticlePage } from 'Pages/ArticlePage/ArticlePage';

const ArticlePage = lazy(() =>
  import('../../Pages/ArticlePage/ArticlePage').then(module => ({
    ...module,
    default: module.ArticlePage,
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
