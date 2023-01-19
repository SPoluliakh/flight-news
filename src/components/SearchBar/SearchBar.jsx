import { useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, filterArticles } from 'Redux/Articles/filterSlice';
import { useGetSearchParams } from 'Huks/GetSearchParams';
import { debounce } from 'debounce';

export const SearchBar = () => {
  const searchedArticles = useSelector(getFilter);
  const dispatch = useDispatch();
  const filterArea = useRef();
  const { pageNumber, setSearchParams } = useGetSearchParams();

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
