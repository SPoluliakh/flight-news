import { useGetSearchParams } from 'Huks/GetSearchParams';

export const Pagination = ({ disabled = 0 }) => {
  const { pageNumber, keyword, setSearchParams } = useGetSearchParams();

  const pageCount = evt => {
    const { innerText } = evt.target;
    innerText === 'next'
      ? setSearchParams(
          keyword !== ''
            ? { page: pageNumber + 1, keyword }
            : { page: pageNumber + 1 }
        )
      : setSearchParams(
          keyword !== ''
            ? { page: pageNumber - 1, keyword }
            : { page: pageNumber - 1 }
        );
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button type="button" onClick={pageCount} disabled={pageNumber === 1}>
        previos
      </button>
      <span>{pageNumber}</span>
      <button type="button" onClick={pageCount} disabled={disabled <= 19}>
        next
      </button>
    </div>
  );
};
