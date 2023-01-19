import { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as SC from './ArticleListItem.styled';

import { Hightlight } from 'components/Hightlight/Hightlight';
import { useSelector } from 'react-redux';
import { getFilter } from 'Redux/Articles/filterSlice';

export const ArticleListItem = ({ article }) => {
  const location = useLocation();
  const { id, imageUrl, updatedAt, title, summary } = article;

  const filter = useSelector(getFilter);

  const dateConverter = value => {
    const data = new Date(value.slice(0, 10));
    return data.toDateString().slice(3);
  };

  const light = useCallback(
    str => {
      return <Hightlight filter={filter} str={str} />;
    },
    [filter]
  );

  return (
    <>
      <SC.Items>
        <SC.Img src={`${imageUrl}`} alt={`${title}`} />
        {updatedAt && <p>{dateConverter(updatedAt)}</p>}
        <SC.Wrap>
          <h2>{light(title)}</h2>
          <p>{light(summary.slice(0, 100))}</p>
        </SC.Wrap>
        <Link to={`articlePage/${id}`} state={{ from: location }}>
          Read more
        </Link>
      </SC.Items>
    </>
  );
};
