import React from 'react';
import './createaccount.css'
import Repaymentform from './repayment'
import CustomerInformation from './customerinfo'
import AdditionalInfo from './additionalinfo'


const CreateAccount = () => {
 return (
  <div className="">
   <div className="col card-group my-3">
    <div className="card border-0">
     <div className="card-body m-auto">
      <img src="https://res.cloudinary.com/ddqa7ztdb/image/upload/v1621239200/Group-6%20inter-track-project/creditstar_logo_kzt3im.png" alt="cloudinary-logo" />
     </div>
     <div className="card-body m-auto">
      <h2 className="text-center h2-creditcard mx-3">Credit Card Application Form</h2>
     </div>
    </div>
   </div>

   <CustomerInformation />
   <AdditionalInfo />
   <form action="Post">
    <div>
     <Repaymentform />
    </div>



    <div className="col-sm-12 card-group my-3">
     <div className="card border-0">
      <div className="card-body m-auto">
       <p className="text-center fs-5 mt-3 p-creditcard mx-3 px-5">
        By clicking 'PREDICT' you acknowledge that you have read and accepted the terms and conditions in CreditStar's <a href="creditstar.com" className="terms-and-policy">Terms of Use</a> and <a href="creditsar.com" className="terms-and-policy">Privacy Policy</a>
       </p>
      </div>
      <div className="card-body m-auto">
       <h3 className="text-center h3-predict mx-3 fw-bold text-uppercase lh-lg fs-5 ">Predict</h3>
      </div>
     </div>
    </div>


   </form>
  </div>
 )
}

export default CreateAccount;