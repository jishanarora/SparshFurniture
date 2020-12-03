import React from "react";
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from './header.styles'

const Header = ({currentUser,hidden}) =>
{
    return(
        <HeaderContainer>
        <LogoContainer to="/" >
            <img alt="logo" src="../images/sparshFurnitureLogo.png" style={{width:"200px",height:"75px"}} />
         </LogoContainer>
         <OptionsContainer>
          <OptionLink className="option" to="/shop">
              Shop
          </OptionLink>
          <OptionLink className="option" to="/contact">
              Contact
          </OptionLink>
          {currentUser? <OptionLink onClick={()=>auth.signOut()}>Sign Out</OptionLink>:<OptionLink className="option" to="/sign-in">
              Sign In
          </OptionLink>}
          <CartIcon/>
         </OptionsContainer>
         {hidden?null:
         <CartDropdown/>}
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
currentUser: selectCurrentUser,
hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);