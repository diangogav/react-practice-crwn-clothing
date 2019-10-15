import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/pages/homepage.component';
import Shop from './components/pages/shop/shop.component';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
