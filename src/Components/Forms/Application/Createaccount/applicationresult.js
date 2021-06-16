import React from 'react';
import './applicationresult.css';

const Result = () => {
 return (
  <div>

   <div className="col card-group my-3">
    <div className="card border-0">
     <div className="card-body m-auto">
      <img src="https://res.cloudinary.com/ddqa7ztdb/image/upload/v1621239200/Group-6%20inter-track-project/creditstar_logo_kzt3im.png" alt="cloudinary-logo" />
     </div>
     <div className="card-body m-auto">
      <h2 className="text-center h2-creditcard mx-3">Credit Card Application Result</h2>
     </div>
    </div>
   </div>

   <div class="card mx-4" style={{ width: "" }}>
    <div class="card-body h5-approved py-1 my-3  mb-3">
     <h5 class="card-title  fs-3 text-light py-3 px-4 text-center"><i class="fas fa-check-circle px-3"></i>Approved</h5>
    </div>
    <p className='m-auto fw-bold p-approved'>Based on our Algorithm, this applicant may not default the next credit. However, you can check other factors in desciding the increment in the credit amount if higher than the previous value <strong className='str-approved'>"(9,000,000)"</strong> </p>



    <div class="container px-4">
     <div class="row approve-application gx-5 m-auto">
      <h4 className='h4-application'>Application Summary</h4>
      <div class="col fw-bold fullname-app">
       <div class="p-3 border-none fs-5">
        Full Name:
        </div>
      </div>
      <div class="col app-name fw-bold">
       <div class="p-3 border-none fs-5">Olawale Peace</div>
      </div>
     </div>
    </div>

    <div class="container px-4">
     <div class="row approve-application gx-5 m-auto">
      <div class="col fw-bold fullname-app">
       <div class="p-3 border-none fs-5">
        Gender:
        </div>
      </div>
      <div class="col app-name fw-bold">
       <div class="p-3 border-none fs-5">Male</div>
      </div>
     </div>
    </div>

    <div class="container px-4">
     <div class="row approve-application gx-5 m-auto">
      <div class="col fw-bold fullname-app">
       <div class="p-3 border-none fs-5">
        Education:
        </div>
      </div>
      <div class="col app-name fw-bold">
       <div class="p-3 border-none fs-5">Graduate</div>
      </div>
     </div>
    </div>

    <div class="container px-4">
     <div class="row approve-application gx-5 m-auto">
      <div class="col fw-bold fullname-app">
       <div class="p-3 border-none fs-5">
        Year of Birth:
        </div>
      </div>
      <div class="col app-name fw-bold">
       <div class="p-3 border-none fs-5">1990</div>
      </div>
     </div>
    </div>

    <div class="container px-4">
     <div class="row approve-application gx-5 m-auto">
      <div class="col fw-bold fullname-app">
       <div class="p-3 border-none fs-5">
        Report Date:
        </div>
      </div>
      <div class="col app-name fw-bold">
       <div class="p-3 border-none fs-5">12/12/2012</div>
      </div>
     </div>
    </div>

    <div class="container px-4">
     <div class="row approve-application gx-5 m-auto">
      <div class="col fw-bold fullname-app">
       <div class="p-3 border-none fs-5">
        Analysed Credit:
        </div>
      </div>
      <div class="col app-name fw-bold">
       <div class="p-3 border-none fs-5">9,000,000</div>
      </div>
     </div>
    </div>

    <div class="container px-4">
     <div class="row approve-application gx-5 m-auto">
      <div class="col fw-bold fullname-app">
       <div class="p-3 border-none fs-5">
        Monthly Repayment:
        </div>
      </div>
      <div class="col app-name fw-bold">
       <div class="p-3 border-none fs-5">1,000,000</div>
      </div>
     </div>
    </div>

    <div class="container px-4">
     <div class="row  gx-5 m-auto">
      <div class="col fw-bold fullname-app">
       <div class="p-3 border-none fs-5">
        <h3 className="text-center h3-send mx-3 fw-bold text-uppercase lh-lg fs-6 ">
         <a href="/" className="nav-link text-light">Send Response</a>
        </h3>
       </div>
      </div>
      <div class="col app-name fw-bold">
       <h3 className="text-center h3-send mx-3 fw-bold text-uppercase lh-lg fs-6 ">
        <a href="/" className="nav-link text-light">Home</a>
       </h3>
      </div>
     </div>
    </div>




    <div class="input-group border-2 pe-2 my-2 ps-3">
     <input type="email" className="form-control mx-2 py-3" placeholder="Email Address" />
    </div>


   </div>

  </div>
 )
}



export default Result;