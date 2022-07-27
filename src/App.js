import React from 'react';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProductListing from './components/ProductListing';
function App() {
  return (
    <div className="App">
      <Router>
         <Header />
         <Switch>
         <Route  exact path="/"><ProductListing/></Route>
         <Route>404 Not found1</Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
