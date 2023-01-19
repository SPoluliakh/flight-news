import { ArticleListItem } from './ArticleListItem/ArticleListItem';
import { useFetchArticlesQuery } from 'Redux/Articles/articlesOperations';
import { Pagination } from 'components/pagination/Pagination';
import * as SC from './ArticleList.styled';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getFilter } from 'Redux/Articles/filterSlice';
import { useMemo } from 'react';

export const ArticleList = () => {
  const [serchParams] = useSearchParams();
  const pageNumber = Number(serchParams.get('page') ?? 1);
  const skip = pageNumber === 1 ? 0 : pageNumber * 20;

  const filter = useSelector(getFilter);
  const { data } = useFetchArticlesQuery(skip);

  const list = (value = [], filt = '') => {
    const searchedValue = filt.toLowerCase();
    const filteredList = value.filter(articl =>
      articl.title.toLowerCase().includes(searchedValue)
    );

    return filteredList;
  };

  const filteredList = useMemo(() => {
    return list(data, filter);
  }, [filter, data]);

  return (
    <>
      <Pagination />
      <SC.List>
        {filteredList.length > 0 ? (
          filteredList.map(article => (
            <ArticleListItem key={article.id} article={article} />
          ))
        ) : (
          <p>Sorry don't have matches your query</p>
        )}
      </SC.List>
      <Pagination />
    </>
  );
};
