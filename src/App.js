import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/signInSignUpPage/signInSignUpPage.component";
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user-actions';


class App extends React.Component {
 
  
  unsubscribeFromAuth=null;
  componentDidMount()
  {
    const {setCurrentUser}= this.props;
   this.unsubscribeFromAuth=auth.onAuthStateChanged(async (userAuth) =>{
     if(userAuth){
       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot(onSnapshot => {
         setCurrentUser( {
             id: onSnapshot.id,
             ...onSnapshot.data()
          })
       })
     }
     else{
       setCurrentUser(userAuth)
     }
   }); 
  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/sign-in" render={()=> this.props.currentUser? (<Redirect to="/" />):(<SignInSignUpPage/>)}></Route>
      </Switch>
    </div>
  );
  }
}

const mapStateToProps=({user})=>({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})

export default connect(mapStateToProps,mapDispatchToProps)(App);
