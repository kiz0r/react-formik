import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import SignInForm from '../SignInForm';
import SignUpForm from '../SignUpForm';
import NotFound from '../pages/NotFound';

const PageRouter = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
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
          <HomePage />
        </Route>
        <Route path="/signUp">
          <SignUpForm title="Login Form" description="" />
        </Route>
        <Route path="/signIn">
          <SignInForm title="SignIn Form" description="" />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

function HomePage() {
  return <div>Hello i am start page </div>;
}

export default PageRouter;
