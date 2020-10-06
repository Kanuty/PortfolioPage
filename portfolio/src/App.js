import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navigation from './components/navigation';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Skills from './pages/Skills';
import FourZeroFour from './pages/FourZeroFour';

import './App.css';

function App() {
  return (
    <Fragment>
      <Router>
      <Navigation></Navigation>
        <div className="appContainer">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/gallery" component={Gallery}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/skills" component={Skills}></Route>
            <Route component={FourZeroFour}></Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
