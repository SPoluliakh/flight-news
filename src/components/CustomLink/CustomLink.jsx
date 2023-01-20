import * as SC from './CustomLink.styled';

export const CustomLink = ({ to, state, children }) => {
  return (
    <SC.LinkTo to={to} state={state}>
      {children}
    </SC.LinkTo>
  );
};
