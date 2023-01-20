import { Button } from '@mui/material';
import { useGetSearchParams } from 'Huks/GetSearchParams';
import PropTypes from 'prop-types';
import * as SC from './Pagination.styled';

export const Pagination = ({ disabled = 0 }) => {
  const { pageNumber, keyword, setSearchParams } = useGetSearchParams();

  const pageCount = evt => {
    const { name } = evt.target;
    name === 'next'
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
    <>
      {disabled >= 19 && (
        <SC.Wrap>
          <Button
            name="prev"
            variant="contained"
            type="button"
            onClick={pageCount}
            disabled={pageNumber === 1}
          >
            PREV
          </Button>
          <SC.Count>{pageNumber}</SC.Count>
          <Button
            name="next"
            variant="contained"
            type="button"
            onClick={pageCount}
          >
            NEXT
          </Button>
        </SC.Wrap>
      )}
    </>
  );
};

Pagination.propTypes = {
  disabled: PropTypes.number,
};
