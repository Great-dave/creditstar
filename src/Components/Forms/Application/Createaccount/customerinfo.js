import React from 'react';
import './customerinfo.css';

const CustomerInformation = (props) => {
  return (

    <div>
      <div className="col-sm-12 card-group my-2">
        <div className="card card-customer p-1" >
          <div className="card-body m-auto">
            <h5 className="card-title h5-customer">Customer Information</h5>
          </div>
        </div>
      </div>

      <div className=" row py-3  my-3">
        <div className="col card border-0  ">
          <div className="titled-star m-auto fs-5 fw-bold text-center pe-5">Title</div>
        </div>
        <div className="col card border-0 ">
          <div className="fs-5 fw-bold ">
            <input type="radio" name="title" className="mx-2" value="" id="Mr" />Mr.
      <input type="radio" name="title" className="mx-2" value="" id="Mrs" />Mrs.
     </div>
          <div className="my-2 fs-5 fw-bold ">
            <input type="radio" name="title" className="mx-2" value="Miss" id="Miss" />Miss
      <input type="radio" name="title" className="mx-2" value="Other" id="Other" />Other
     </div>
        </div>
      </div>

      <div className=" row py-3  my-3">
        <div className="col card border-0  ">
          <div className="titled-star m-auto fs-5 fw-bold text-start">Full Name</div>
        </div>
        <div className="col card border-0 ">
          <div className="fs-5 fw-bold ">
            <input type="text" name="FirstName" id="LastName me-2" placeholder="First Name" className="input-b" />
            <input type="text" name="LastName" id="LastName" placeholder="Last Name" className="input-b" />
          </div>
        </div>
      </div>

      <div className=" row py-3  my-3 pb-2">
        <div className="col card border-0  ">
          <div className="titled-star m-auto fs-5 fw-bold pe-4 text-start">Gender</div>
        </div>
        <div className="col card border-0 ">
          <div className="fs-5 fw-bold ">
            <input type="radio" name="title" className="mx-2" value="" id="Male" />Male
     </div>
          <div className="my-2 fs-5 fw-bold ">
            <input type="radio" name="title" className="mx-2" value="" id="Female" />Female
     </div>
        </div>
      </div>

      <div className=" row py-3  my-3 pb-2">
        <div className="col card border-0  ">
          <div className="titled-star m-auto fs-5 fw-bold">Education</div>
        </div>
        <div className="col card border-0 ">
          <div className="fs-5 fw-bold ">
            <select name="education" id="education" className="input-b">
              <option selected>Select the Highest Level</option>
              <option value="uni">University</option>
              <option value="secondary">High School</option>
              <option value="other">Others</option>
            </select>
          </div>
        </div>
      </div>

      <div className=" row py-3  my-3">
        <div className="col card border-0  ">
          <div className="titled-star m-auto fs-5 ps-4 pe-1 fw-bold">Date of Birth</div>
        </div>
        <div className="col card border-0 ">
          <div className="fs-5 fw-bold ">
            <input type="date" name="dob_day" id="dob_day" size="2" maxLength="2" placeholder="" className="input-b" />
          </div>
        </div>
      </div>

      <div className=" row  my-3 py-3">
        <div className="col card border-0  ">
          <div className="titled-star m-auto fs-5 fw-bold text-center pe-1 ps-4">Marital Status</div>
        </div>
        <div className="col card border-0 ">
          <div className="fs-5 fw-bold ">
            <input type="radio" name="marriedstatus" className="mx-2" value="single" /> Single
       <input type="radio" name="marriedstatus" className="mx-2" value="married" />Married
     </div>
          <div className="my-2 fs-5 fw-bold ">
            <input type="radio" name="marriedstatus" className="mx-2" value="divorced" />Divorced
      <input type="radio" name="marriedstatus" className="mx-2" value="other" />Others
     </div>
        </div>
      </div>
    </div>
  )
}




export default CustomerInformation;