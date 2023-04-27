import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home, NotFound, SignIn, SignUp } from './components/pages';
import { BASE } from './common/constants';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={`${BASE}`}>
          <Home />
        </Route>
        <Route path={`${BASE}signUp`}>
          <SignUp />
        </Route>
        <Route path={`${BASE}signIn`}>
          <SignIn />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
