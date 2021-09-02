import './reset.css';
import './App.css';
import Header from './Components/Shared/Header';
import Home from './Pages/Home/Home';
import ChooseSession from './Pages/ChooseSession/ChooseSession';
import ChooseSeat from './Pages/ChooseSeat/ChooseSeat';
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
          <Route path='/sessoes/:idFilme' exact>
            <ChooseSession />
          </Route>
          <Route path='/assentos/:idSessao' exact>
            <ChooseSeat />
          </Route>
        </Switch>
        
      </div>
    </Router>
   
  );
}

export default App;
