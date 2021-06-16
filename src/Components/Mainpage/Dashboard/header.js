import React from 'react';
import './header.css'



const Header = (props) => {
 return (
  <div className="header-mainpage">
   <h1>{props.header}<i class="far fa-user-circle p-2 avatar"></i></h1>

  </div>
 )
}



export default Header;