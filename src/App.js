import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
class App extends Component {
  render() {
    return (
    
        <Router>
  <div className="App">
  <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
   </div>
        </Router>
    );
  }
}

export default App;
