import { CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override: CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderColor: 'yellow',
};

function Spiner() {
  return (
    <>
      <ClipLoader
        color="red"
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
      />
    </>
  );
}

export default Spiner;
