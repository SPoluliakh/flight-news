import { Button } from '@mui/material';
import { useGetSearchParams } from 'Huks/GetSearchParams';
import PropTypes from 'prop-types';
import * as SC from './Pagination.styled';

export const Pagination = ({ disabled = 0 }) => {
  const { pageNumber, keyword, setSearchParams } = useGetSearchParams();

  const pageCount = evt => {
    const { innerText } = evt.target;
    innerText === 'NEXT'
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
    <SC.Wrap>
      <Button
        variant="contained"
        type="button"
        onClick={pageCount}
        disabled={pageNumber === 1}
      >
        PREV
      </Button>
      <SC.Count>{pageNumber}</SC.Count>
      <Button
        variant="contained"
        type="button"
        onClick={pageCount}
        disabled={disabled <= 19}
      >
        NEXT
      </Button>
    </SC.Wrap>
  );
};

Pagination.propTypes = {
  disabled: PropTypes.number,
};
