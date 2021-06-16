import React from 'react';
import './navbar.css';
import SectionA from '../Section_a/sectionA'

// import { Nav, Navbar, NavDropdown, Button, Form, FormControl, Container } from 'react-bootstrap'

const Navcomponent = () => {
 return (
  <div>
   <nav className="navbar navbar-expand-lg navbar-light mb-5 pb-5 ">
    <div className="container-fluid my-auto mt-2 py-3 mx-auto ">
     <a className="navbar-brand px-3 ms-5" href="/">
      <img src="https://res.cloudinary.com/ddqa7ztdb/image/upload/v1621239200/Group-6%20inter-track-project/creditstar_logo_kzt3im.png" alt="credit_star_logo" className='logo' />
     </a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav d-flex ">
       <a className="nav-link active ms-2 about-us font-weight-bold fs-6 text text-center" aria-current="page" href="/">ABOUT US</a>
       <a className="nav-link active me-5 pe-5 align-item-end process font-weight-bold text-center fs-6 text" aria-current="page" href="/">HOW IT WORKS</a>
       <a className="nav-link me-2 ms-2 px-3 account text-center" href="/">ACCOUNT</a>
       <a className="nav-link me-2 ms-2 px-3 py-2 text-white text-center request" href="/">REQUEST A QUOTE</a>
      </div>
     </div>
    </div>
   </nav>
   <SectionA />



  </div>
 )
}

export default Navcomponent;