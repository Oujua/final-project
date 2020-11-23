import React from 'react'
import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>

        <Switch>
          <Route path="/home">
            <Card />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Card />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
