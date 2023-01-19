// import { useDispatch, useSelector } from 'react-redux';
// import { getFilter, filterArticles } from 'Redux/Articles/filterSlice';
// import { useFetchArticlesQuery } from 'Redux/Articles/articlesOperations';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ArticleList } from 'components/ArticleList/ArticleList';

export const Home = () => {
  //   const searchedArticles = useSelector(getFilter);
  //   const dispatch = useDispatch();
  //   const { data } = useFetchArticlesQuery();

  return (
    <>
      <SearchBar />
      <ArticleList />
    </>
  );
};
