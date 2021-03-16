import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import {ErrorPage,CommingSoonPage,HomePage} from './pages';
import { NavbarComponent,Footer,ScrollToTop} from './components';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavbarComponent />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/comingsoon' exact component={CommingSoonPage} />
        <Route path="/404" component={ErrorPage} />
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
