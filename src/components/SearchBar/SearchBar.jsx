import { useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getFilter, filterArticles } from 'Redux/Articles/filterSlice';

import { debounce } from 'debounce';

export const SearchBar = () => {
  const searchedArticles = useSelector(getFilter);
  const dispatch = useDispatch();
  const filterArea = useRef();
  const [serchParams, setSearchParams] = useSearchParams();
  const pageNumber = Number(serchParams.get('page') ?? 1);

  const handleSearchParamsChange = useMemo(() => {
    return debounce(
      value =>
        setSearchParams(
          value !== ''
            ? { page: pageNumber, keyword: value }
            : { page: pageNumber }
        ),
      500
    );
  }, [pageNumber, setSearchParams]);

  const handleFilterChange = evt => {
    const { value } = evt.target;
    dispatch(filterArticles(value));
    handleSearchParamsChange(value);
  };
  const handleFilterClear = () => {
    dispatch(filterArticles(''));
    setSearchParams({ page: 1 });
    filterArea.current.focus();
  };

  return (
    <>
      <input
        type="text"
        value={searchedArticles}
        onChange={handleFilterChange}
        ref={filterArea}
      />

      <button type="button" onClick={handleFilterClear}>
        Clear
      </button>
    </>
  );
};
