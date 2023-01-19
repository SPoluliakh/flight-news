import { pages } from 'Utils/pages';
import { Link } from 'react-router-dom';

export const AppBar = () => {
  return (
    <>
      {pages.map(({ href, text }) => (
        <Link key={text} to={href}>
          {text}
        </Link>
      ))}
    </>
  );
};
