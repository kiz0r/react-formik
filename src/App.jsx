import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home, NotFound, SignIn, SignUp } from './components/pages';
import { formFilling, FormContext } from './contexts';

function App() {
  const base = '/react-formik/';

  return (
    <FormContext.Provider value={formFilling}>
      <Router>
        <Switch>
          <Route exact path={`${base}`}>
            <Home />
          </Route>
          <Route path={`${base}signUp`}>
            <SignUp />
          </Route>
          <Route path={`${base}signIn`}>
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
