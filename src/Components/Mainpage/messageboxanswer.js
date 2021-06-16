import React from 'react';
import './messageboxanswer.css'
import Header from './Dashboard/header'



const Messageboxanswer = () => {
 return (
  <div className="msg-box">
   <div className="row row-cols-1 row-cols-md-2 g-3 m-auto">
    <div className="col-md-4">
     <div className="card">
      <div className="card-body">
       <div className="creditstarr pe-1 mt-3 pb-4 mb-5">
        <section className="my-1 mx-4 ps-1">
         <div className="row my-5 ps-1">
          <div className="col">
           <a className="nav-link" href="/">
            <img src="https://res.cloudinary.com/ddqa7ztdb/image/upload/v1621239200/Group-6%20inter-track-project/creditstar_logo_kzt3im.png" alt="credit-logo" className="" />
           </a>
          </div>
         </div>

         <div className="row my-4">
          <div className="col-6 px-3">
           <a className="nav-link  fw-bold fs-6" href="/">
            <i className="fas fa-home px-1 mx-2 mb-3"></i>Home
        </a>
          </div>
         </div>

         <div className="row my-4">
          <div className="col-6 px-3">
           <a className="nav-link fw-bold fs-6  card-request" href="/">
            <i className="far fa-credit-card mb-3 ms-1 pe-2"></i>Card Request
            </a>
          </div>
         </div>
         <div className="row my-4">
          <div className="col-6 px-3">
           <a className="nav-link prediction px-3 fs-6" href="/">
            <div className="dropdown">
             <i className="fas fa-bolt px-1 mx mb-3 -1"></i>
             <button className="btn btn-outline-light border-0 dropdown-toggle prediction fw-bold fs-6 px-1 ms-1" type="button" id="dropdownMenuButton2"
              data-bs-toggle="dropdown" aria-expanded="false">Predictions
          </button>
             <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
              <li><a className="dropdown-item " href="/">Approved</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="/">Red Flags</a></li>
             </ul>
            </div>
           </a>
          </div>
         </div>
         <div className="row my-4">
          <div className="col-5 px-2">
           <a className="nav-link fw-bold fs-6 faq" href="/">
            <i className="far fa-question-circle mb-3 px-1 mx-1"></i> FAQs
       </a>
          </div>
         </div>
         <div className="row my-4">
          <div className="col-6 px-3">
           <a className="nav-link report fs-6 fw-bold cadreq" href="/">
            <i className="fas fa-exclamation-triangle mb-3 px-1 mx-1"></i>Report Bugs
         </a>
          </div>
         </div>
        </section>
       </div>
      </div>
     </div>
    </div>


    <div className="col-md-8 px-">
     <div className="card mb-3">
      <div className="card-body">
       <div className="flag-req mx-4 mt-2 px-3"><Header className="over" header="Report" /></div>
      </div>
     </div>

     <div className="card mb-3">
      <div className="card-body">
       <div className="flag-req mx-4 mt-2 px-3">
        <h5 className='h5-message py-3 px-3 text-center'>
         Thank you for contacting us! You will be attended to shortly
        </h5>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Messageboxanswer;