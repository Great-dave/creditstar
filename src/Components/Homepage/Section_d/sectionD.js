import React from 'react';
import './sectionD.css';

const SectionD = () => {
   return (
      <section className="sectionD">

         <div className="container">
            <div className="row gx-5 my-5">
               <div className="col-sm-12 col-md-6 ms-5 py-4 pe-3">
                  <figure className="figure team-image">
                     <img src="https://res.cloudinary.com/ddqa7ztdb/image/upload/v1621239204/Group-6%20inter-track-project/homehandimage_kjemxx.png" alt="team-hands" style={{ width: "450px" }} />
                  </figure>
               </div>


               <div className="col-sm-12 col-md-4 py-5 ms-5 lh-lg who-we-are">
                  <h2 className="h2-section-d pt-5">Who we are</h2>
                  <p className="p-section-d mt-3 px-1">We are creative and innovative team, learning and improving
                  algorithms, investing in research to provide reliable services to the financial sector.
   </p>
                  <a className="nav-link" href="/">
                     <button className="get-button my-2 learn-more">Learn More</button>
                  </a>
               </div>



            </div>
         </div>


      </section>
   )
}


export default SectionD;










