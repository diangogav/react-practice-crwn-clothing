import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/pages/homepage.component';
import Shop from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './components/pages/sign-in-sign-up/sign-in-sign-up.component';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
