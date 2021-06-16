import React from 'react';
import './footer.css';



const Footer = () => {
  return (
    <footer className="mx-1 px-4">
      <div className="row py-4 px-4">
        <div className="col-sm-6 col-md-3 px-2 ">
          <ul className="list-unstyled">
            <li className=""><a className="nav-link information fs-6" href="/">Information</a></li>
            <li className=""><a className="nav-link text-light fw-light" href="/">Blog</a></li>
            <li className=""><a className="nav-link text-light fw-light" href="/">FAQs</a></li>
            <li className=""><a className="nav-link text-light fw-light" href="/">Contact Us</a></li>
          </ul>
        </div>

        <div className="col-sm-6 col-md-3">
          <ul className="list-unstyled">
            <li className=""><a className="nav-link policies fs-6" href="/">Policies</a></li>
            <li className=""><a className="nav-link text-light fw-light" href="/">Terms and Conditions</a></li>
            <li className=""><a className="nav-link text-light fw-light" href="/">About Us</a></li>
            <li className=""><a className="nav-link text-light fw-light " href="/">Customer Assistance</a></li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-3">
          <ul className="list-unstyled">
            <li className=""><a className="nav-link follow_us fs-6" href="/">Follow Us</a></li>
            <li className=""><a className="nav-link text-light fw-light" href="/"><i className="fab fa-facebook-square me-1"></i> Facebook
      </a></li>
            <li className=""><a className="nav-link text-light fw-light" href="/">
              <i className="fab fa-instagram me-1"></i>
       Instagram</a></li>
            <li className=""><a className="nav-link  text-light fw-light " href="/"><i className="fab fa-twitter me-1"></i>
       Twitter</a></li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-2">
          <ul className="nav flex-column">
            <li className="">
              <a className="nav-link credit fs-6" href="/">&copy; 2021, CreditStar</a></li>
            <li className=""><a className="nav-link text-light fw-light fw-light" href="/">All rights reserved</a></li>
          </ul>
        </div>
      </div>
    </footer >
  )
}

export default Footer;