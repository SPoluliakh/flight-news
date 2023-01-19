import { useDispatch, useSelector } from 'react-redux';
import { getFilter, filterArticles } from 'Redux/Articles/filterSlice';

export const SearchBar = () => {
  const searchedArticles = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    const { value } = evt.target;
    dispatch(filterArticles(value));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchedArticles}
        onChange={handleFilterChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};
