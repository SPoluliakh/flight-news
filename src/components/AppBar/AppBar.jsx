import { AppBar, Toolbar } from '@mui/material';
import { pages } from 'Utils/pages';
import { Link } from 'react-router-dom';
import { FcKindle } from 'react-icons/fc';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <FcKindle size="42" />
        {pages.map(({ href, text }) => (
          <Link key={text} to={href}>
            {text}
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
};
