import { useSearchParams } from 'react-router-dom';

export const Pagination = () => {
  const [serchParams, setSearchParams] = useSearchParams();
  const pageNumber = Number(serchParams.get('page') ?? 1);

  const pageCount = evt => {
    const { innerText } = evt.target;
    innerText === 'next'
      ? setSearchParams({ page: pageNumber + 1 })
      : setSearchParams(
          pageNumber >= 2 ? { page: pageNumber - 1 } : { page: 1 }
        );
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button type="button" onClick={pageCount} disabled={pageNumber === 1}>
        previos
      </button>
      <span>{pageNumber}</span>
      <button type="button" onClick={pageCount} disabled={pageNumber === 599}>
        next
      </button>
    </div>
  );
};
