import { Link } from 'react-router-dom';
import './Header.sass';
import logo from '/logo.svg';
const Header = () => {
  const base = '/react-formik/';
  return (
    <header className="header">
      <img src={logo} alt="Company Logo" className="logo" />
      <nav>
        <ul className="routerList">
          <li>
            <Link to={`${base}`}>Home</Link>
          </li>
          <li>
            <Link to={`${base}signUp`}>Sign Up</Link>
          </li>
          <li>
            <Link to={`${base}signIn`}>Sign In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
