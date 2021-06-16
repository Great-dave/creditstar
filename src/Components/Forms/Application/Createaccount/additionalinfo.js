import React from 'react';
import './additionalinfo.css';


const AdditionalInfo = () => {
 return (
  <div className="additionalinfo">  <div className="col-sm-12 card-group my-2">
   <div className="card card-customer p-1" >
    <div className="card-body m-auto">
     <h5 className="card-title h5-customer">Additional Details</h5>
    </div>
   </div>
  </div>

   <div className=" row py-3  my-3">
    <div className="col card border-0  ">
     <div className="titled-star m-auto fs-5 fw-bold text-center pe-2 ps-2 ">Bank Name</div>
    </div>
    <div className="col card border-0 ">
     <div className="my-2 fs-5 fw-bold p-start">
      <input type="text" name="bankname" id="" placeholder='Bank Name' className="input-b" />
     </div>
    </div>
   </div>

   <div className=" row py-3  my-3">
    <div className="col card border-0  ">
     <div className="titled-star m-auto fs-5 fw-bold text-center pe-1 ps-5 ">Account Number</div>
    </div>
    <div className="col card border-0 ">
     <div className="my-2 fs-5 fw-bold p-start">
      <input type="text" name="bank-name" id="Mr" placeholder="Enter account number" className="input-b" />
     </div>
    </div>
   </div>

   <div className=" row py-3  my-3">
    <div className="col card border-0  ">
     <div className="titled-star m-auto fs-5 fw-bold text-center pe-1 ps-5 ">Amount Loaned</div>
    </div>
    <div className="col card border-0 ">
     <div className="my-2 fs-5 fw-bold p-start">
      <input type="text" name="bank-name" id="Mr" placeholder='Enter Value' className="input-b" />
     </div>
    </div>
   </div>
  </div>
 )
}

export default AdditionalInfo;