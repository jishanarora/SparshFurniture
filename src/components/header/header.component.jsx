import React from "react";
import "./header.styles.scss";
import {Link} from "react-router-dom";
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) =>
{
    return(
        <div className="header">
        <Link to="/" className="logoConatiner">
            <img alt="logo" src="/images/sparshFurnitureLogo.png" style={{width:"200px",height:"75px"}} />
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
         </div>
        </div>
    )
}

export default Header;