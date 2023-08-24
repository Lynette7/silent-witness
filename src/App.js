import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/SignUp';
import About from './components/About';
import Navbar from './components/Navbar';
import Report from './components/Report';
import Help from './components/Help';

function App() {
  return (
    <Router>
       <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={About} />
        <Route path="/report" component={Report} />
        <Route path="/help" component={Help} />
      </Switch>
    </Router>
  );
}

export default App;
