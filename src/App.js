import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom';


function App() {
  const sofa= ()=>(
    <div>
      <h1>Sofaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
    </div>
  )
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/shop/sofas" component={sofa}></Route>
      </Switch>
    </div>
  );
}

export default App;
