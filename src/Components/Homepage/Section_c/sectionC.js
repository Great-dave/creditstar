import React from 'react';
import './sectionC.css';

const SectionC = () => {
 return (
  <section className="sectionC">
   <h2 className="h2-sectionc display-4 fw-bolder">Benefits</h2>
   <div className="container my-4 py-4">
    <div className="row my-auto mx-auto">
     <div className="col-sm-12 fs-6 col-md-4 mx-3 shadow-sm p-3 mb-5 bg-body rounded benefit-content">
      <h4 className="my-4 sectionc-h4">Ease of Work</h4>
      <p className="text-dark lh-lg py-3 px-4">You don't need to worry about the research or Machine Learning
      as that is our focus. You handle the customer, we handle the data.
     </p>
     </div>
     <div className="col-sm-12 col-lg-4 fs-6 mx-3 shadow-sm p-3 mb-5 bg-body rounded benefit-content">
      <h4 className="my-4 sectionc-h4">Fully Automated</h4>
      <p className="text-dark lh-lg py-3">It significantly reduces workload of the Loan Department with the hassles of defaulting customers
      </p>
     </div>
     <div className="col-sm-12 col-lg-3 px-3 ms-3 fs-6 shadow-sm p-3 mb-5 bg-body rounded benefit-content">
      <h4 className="my-4 sectionc-h4">Fast and Efficient</h4>
      <p className="text-dark lh-lg fs-6 py-3 px-5">Get Result in Five Minutes </p>
     </div>
    </div>
   </div>
  </section>
 )
}


export default SectionC;