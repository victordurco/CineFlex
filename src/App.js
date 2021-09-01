import './reset.css';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>
        
      </div>
    </Router>
   
  );
}

export default App;
