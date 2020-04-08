import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Game from './components/Game';
import Rules from './components/Rules';


function App() {
  return (
    <div className="App green darken-3">
    <BrowserRouter>
    <Navbar />
      <Switch>
        <div>
          <Route exact path="/" component={Game} />
           <Route path="/rules" component={Rules} />
        </div>
      </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
