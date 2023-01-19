import { ArticleListItem } from './ArticleListItem/ArticleListItem';
import { useFetchArticlesQuery } from 'Redux/Articles/articlesOperations';
import { Pagination } from 'components/pagination/Pagination';
import * as SC from './ArticleList.styled';
import { useEffect, useState } from 'react';
import { useGetSearchParams } from 'Huks/GetSearchParams';
import Spiner from '../Spiner/Spiner';

export const ArticleList = () => {
  const { pageNumber, keyword, setSearchParams } = useGetSearchParams();
  const skip = pageNumber === 1 ? 0 : pageNumber * 20 - 20;
  const [chekPage, setChekPage] = useState(keyword);

  useEffect(() => {
    if (keyword !== chekPage) {
      setSearchParams(
        keyword !== '' ? { page: 1, keyword } : { page: pageNumber }
      );
      setChekPage(keyword);
    }
  }, [keyword, setSearchParams, chekPage, pageNumber]);

  const { data, isFetching } = useFetchArticlesQuery(
    { skip, keyword },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  if (!data) return;
  return (
    <>
      {isFetching && <Spiner />}
      <Pagination disabled={data.length} />

      <SC.List>
        {data.length > 0 ? (
          data.map(article => (
            <ArticleListItem key={article.id} article={article} />
          ))
        ) : (
          <p>Sorry don't have matches your query</p>
        )}
      </SC.List>
      <Pagination disabled={data.length} />
    </>
  );
};
