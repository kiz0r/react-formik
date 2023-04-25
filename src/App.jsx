import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home, NotFound, SignIn, SignUp } from './components/pages';
import { formFilling, FormContext } from './contexts';

function App() {
  return (
    <FormContext.Provider value={formFilling}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </FormContext.Provider>
  );
}

export default App;
