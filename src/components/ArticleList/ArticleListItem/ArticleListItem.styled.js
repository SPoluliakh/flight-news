import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkTo = styled(Link)`
  position: relative;
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[3]}px;
  text-decoration: none;

  width: 78px;

  &::after {
    content: ' ';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${p => p.theme.colors.linkHover};
    scale: 0;
    transition: 300ms linear;
  }

  :hover::after,
  :focus::after {
    scale: 1;
  }
`;
