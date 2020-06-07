import React from "react";
import "./header.styles.scss";
import {Link} from "react-router-dom";

const Header = () =>
{
    return(
        <div className="header">
        <Link to="/" className="logoConatiner">
            <img src="/images/sparshFurnitureLogo.png" style={{width:"200px",height:"75px"}} />
         </Link>
         <div className="options">
          <Link className="option" to="/shop">
              Shop
          </Link>
          <Link className="option" to="/contact">
              Contact
          </Link>
         </div>
        </div>
    )
}

export default Header;