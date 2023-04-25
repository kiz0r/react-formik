import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import SignUpForm from '../SignUpForm';
import LoginForm from '../LoginForm';

const MyHeader = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Start Page</Link>
          </li>
          <li>
            <Link to="/login">Create Your account!</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up!</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route path="/login">
          <LoginForm
            title="Login Form"
            description="We always keep your data in secret"
          />
        </Route>
        <Route path="/signup">
          <SignUpForm
            title="SignUp Form"
            description="We are glad to see you again!"
          />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

function NotFound() {
  const styles = {
    fontSize: '32px',
    width: '100%',
    height: '100%',
    fontWeight: '700',
  };
  return <div style={styles}>Page does not exist =(</div>;
}

function StartPage() {
  return <div>Hello i am start page </div>;
}

export default MyHeader;
