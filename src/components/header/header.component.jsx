import React from "react";
import "./header.styles.scss";
import {Link} from "react-router-dom";
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'

const Header = ({currentUser,hidden}) =>
{
    return(
        <div className="header">
        <Link to="/" className="logoConatiner">
            <img alt="logo" src="../images/sparshFurnitureLogo.png" style={{width:"200px",height:"75px"}} />
         </Link>
         <div className="options">
          <Link className="option" to="/shop">
              Shop
          </Link>
          <Link className="option" to="/contact">
              Contact
          </Link>
          {currentUser? <div className="option" onClick={()=>auth.signOut()}>Sign Out</div>:<Link className="option" to="/sign-in">
              Sign In
          </Link>}
          <CartIcon/>
         </div>
         {hidden?null:
         <CartDropdown/>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
currentUser: selectCurrentUser,
hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);