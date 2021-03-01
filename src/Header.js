import React from "react";
import logo from "./images/logo1.png";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="nav-wrapper">
    <div className="left-side">
   
      <Link to="/" >
      <img
          className="logo"
          src={ logo }
          alt=""
        />
      </Link>
    
</div>
<div className="right-side">

      <div className="header__nav">
     
        <Link to={!user && "/login"} className="Link">
          <div onClick={handleAuthentication} className="Link">
          
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user?.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : " Sign In"}{" "}
            </span>
            </div>
        </Link>
        
        </div>
<div className="header__cart">
        <Link to="/orders" className="Link">
        
          <div className="header__option">
            <span className="header__optionLineOne"> Returns & Orders</span>
          </div>
        </Link>
        </div>
        <Link to="/checkout">
          <div className="cart">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo_header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        
      </div>
      </div>
  );
}

export default Header;
