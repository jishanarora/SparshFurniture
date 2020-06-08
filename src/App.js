import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import {Switch, Route} from 'react-router-dom';
import Header from "./components/header/header.component"
import SignInSignUpPage from "./pages/signInSignUpPage/signInSignUpPage.component";


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/sign-in" component={SignInSignUpPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
