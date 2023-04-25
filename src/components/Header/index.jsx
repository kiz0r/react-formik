import { Link } from 'react-router-dom';
import './Header.sass';

const Header = () => {
  return (
    <header className="header">
      <img src="../../../public/logo.svg" alt="Company Logo" className="logo" />
      <nav>
        <ul className="routerList">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signUp">Sign Up</Link>
          </li>
          <li>
            <Link to="/signIn">Sign In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
