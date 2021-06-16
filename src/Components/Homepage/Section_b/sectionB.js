import React from 'react';
import './sectionB.css';

const SectionB = () => {
  return (
    <section className="procedure  mx-auto">
      <div className="container">
        <div className="row g-5  mx-auto">
          <div className="col-sm-10 col-md-12">
            <h1 className="display-1 sectionb-h1 fw-weight-bolder">How it works</h1>
            <div className="procedure-content">
              <p className="procedure-para">1</p>
     You request a quote from our team and we provide a befitting plan
     for you and we exchange APIs with our Dev team
    </div>
            <div className="procedure-content">
              <p className="procedure-para">2</p>
     The data collected  via API is parsed through our Algorithm, on your dashboard
     you can view data collected which is used for the predictions
    </div>
            <div className="procedure-content">
              <p className="procedure-para">3</p>
     On the dashboard, you will be able to see list of customers approved for
     a credit card as well as the limits and customers that might default with the reasons
    </div>

            <div className="procedure-content">
              <p className="procedure-para">4</p>
     We make it safe and protect your customer's data
    </div>
            <div className="d-grid gap-3 col-4 mx-auto">
              <a className="nav-link" href="/"><button className="get-button-sectionB mt-5 mx-auto">Get Started</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </section>
  )
}

export default SectionB;