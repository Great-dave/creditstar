import React from 'react';
import './sectionA.css';


const SectionA = () => {
  return (
    <section className="get-started-section-a">
      <div className="container">
        <div className="row g-5">
          <div className="col-sm-10 col-md-6 ">
            <h1 className="h1-section-a fs-weight-bold fs-text-1"> <strong style={{ color: 'orange' }}>Predict</strong> Credit Card
    Application <strong style={{ color: 'orange' }}>Risk</strong></h1>
            <p className="p-section-a mt-3 px-1">You don't need to worry if your customers will default your credit card payment, we will do the worrying for you with our World Class Algorithm</p>
            <a className="nav-link" href="/">
              <button className="get-button mt-2">Get Started</button></a>
          </div>

          <div className="col-sm-10 col-md-6">
            <figure className="figure">
              <img src="https://res.cloudinary.com/ddqa7ztdb/image/upload/v1621239205/Group-6%20inter-track-project/homelaptopimage_derc3r.png" className="figure-img img-fluid rounded" alt="credit-card-approved" />
            </figure>

          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionA;