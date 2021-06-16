import React from 'react';
import './requestquote.css';

const Requestquote = () => {
 return (
  <div className="request-container">

   <div class="card mx-4" >
    <div class="card-body h5-request py-1 my-3  mb-3">
     <h5 class="card-title  fs-3 text-light py-3 px-4">Request a Quote</h5>
    </div>
    <div class="input-group border-2 pe-2 my-2 ps-3">
     <input type="email" className="form-control mx-2 py-3" placeholder="Email Address" />
    </div>
    <div class="input-group border-2 pe-2 my-2 ps-3">
     <input type="text" className="form-control mx-2 py-3" placeholder="Name of Company" />
    </div>
    <div class="input-group border-2 pe-2 my-2 ps-3">
     <input type="text" className="form-control mx-2 py-3" placeholder="Comapany Size" />
    </div>
    <div class="input-group border-2 pe-2 my-2 ps-3">
     <input type="text" className="form-control mx-2 py-3" placeholder="When can we call you during office hours" />
    </div>
    <div class="input-group border-2 pe-2 my-2 ps-3">
     <input type="number" className="form-control mx-2 py-3" placeholder="Phone Number" />
    </div>
    <div class="input-group border-2 pe-2 my-2 ps-3">
     <input type="text" className="form-control mx-2 py-3" placeholder="Contact Name" />
    </div>
    <div class="input-group border-2 pe-2 my-2 ps-3">
     <input type="text" className="form-control mx-2 py-3" placeholder="Contact Position" />
    </div>
    <div class="input-group border-2 pe-4 my-2 ps-3">
     <input type="text" className="form-control mx-2 pe-4 py-3" placeholder="Enter your Message" />
    </div>


    <div class="input-group border-2 pe-4 my-2 ps-3">
     <div className="col-sm-12 card-group my-3">
      <div className="card border-0">
       <div className="card-body m-auto">
        <div class="row ">
         <div class="col">
          <h3 className="text-center h3-cancel mx-3 fw-bold text-uppercase lh-lg fs-6 ">
           <a href="/" className="nav-link">Cancel</a>
          </h3>
         </div>
         <div class="col">
          <h3 className="text-center h3-send mx-3 fw-bold text-uppercase lh-lg fs-6 ">
           <a href="/" className="nav-link text-light">Send</a>
          </h3>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>

   </div>
  </div>
 )
}

export default Requestquote;