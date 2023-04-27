import { Link } from 'react-router-dom';
import './Header.sass';
import logo from '/logo.svg';
import { BASE } from '../../common/constants';

const Header = () => {
  return (
    <header className="header">
      <Link to={`${BASE}`}>
        <img src={logo} alt="Company Logo" className="logo" />
      </Link>
      <nav>
        <ul className="routerList">
          <li>
            <Link to={`${BASE}`}>Home</Link>
          </li>
          <li>
            <Link to={`${BASE}signUp`}>Sign Up</Link>
          </li>
          <li>
            <Link to={`${BASE}signIn`}>Sign In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
