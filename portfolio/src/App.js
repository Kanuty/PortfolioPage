import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navigation from './components/navigation';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Skills from './pages/Skills';

import './App.css';

function App() {
  return (
    <Fragment>
      <Router>
      <Navigation></Navigation>
        <div className="appContainer">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/gallery" component={Gallery}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/skills" component={Skills}></Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
