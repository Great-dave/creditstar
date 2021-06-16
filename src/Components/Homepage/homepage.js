import React from 'react';
// import Nav from './Header_navbar/header';
import Navcomponent from './Navbar/navbar';
import './homepage.css'
import SectionB from '../Homepage/Section_b/sectionB'
import SectionC from './Section_c/sectionC';
import SectionD from './Section_d/sectionD';
import Footer from './Footer/footer';


const Homepage = () => {
 return (
  <div>
   <div className="bgimage"><Navcomponent /></div>
   <SectionB />
   <SectionC />
   <SectionD />
   <Footer />

  </div>
 )
}

export default Homepage;