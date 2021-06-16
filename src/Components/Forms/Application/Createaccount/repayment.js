import React from 'react';
import './repayment.css';

function Repaymentform() {
  return (
    <div>
      <div className="additionalinfo">  <div className="col-sm-12 card-group my-2">
        <div className="card card-customer p-1" >
          <div className="card-body m-auto">
            <h5 className="card-title h5-customer">History of Past 6 Months Payment</h5>
          </div>
        </div>
      </div>

        <div className=" row pt-3  my-2">
          <div className="col card border-0  ">
            <div className="titled-star m-auto fs-6 fw-bold text-center pe-2 ps-2 ">Select 6 Month Range</div>
          </div>
          <div className="col card border-0 ">
            <div className="my-2 fs-5 fw-bold p-start">
              <input type="date" name="pay_history" id="pay_history"
                max="01-04-2020" placeholder="April (2020)- September(2020)" className="input-b" /> -
                <input type="date" name="pay_history" id="pay_history"
                max="01-09-2020" placeholder="April (2020)- September(2020)" className="input-b" />
            </div>
          </div>
        </div>

        <div className=" row py-4 my-3" >
          <div className="col-md-6 card border-0 history" >
            <div className="m-auto pe-5 pe-5 fs-6 fw-bold text-start">Month 1</div>
          </div>
          <div className="col-md-6 card border-0 ">
            <div className="fs-6 fw-bold ">
              <label className="mx-2">
                <p className="months-p" style={{ fontSize: '14px' }}>Repayment Amount
                </p>
                <input type="text" placeholder="Enter Amount" className="month-input" />
              </label>
              <label className="mx-2">
                <p className="months-p" style={{ fontSize: '14px' }}> Amount Paid
                </p>
                <input type="text" placeholder="Enter Amount" className="month-input" />
              </label>
              <label className="mx-2">
                <p className="months-p" style={{ fontSize: '14px' }}>Payment Type
                </p>
                <input type="text" placeholder="Same Month" className="month-input" />
              </label>
            </div>
          </div>
        </div>

        <div className=" row py-4 my-3" >
          <div className="col-md-6 card border-0 history" >
            <div className="m-auto pe-5 fs-6 fw-bold text-start">Month 2</div>
          </div>
          <div className="col-md-6 card border-0 ">
            <div className="fs-6 fw-bold ">
              <label className="mx-2">
                <p className="months-p" style={{ fontSize: '14px' }}>Repayment Amount
                </p>
                <input type="text" placeholder="Enter Amount" className="month-input" />
              </label>
              <label className="mx-2">
                <p className="months-p" style={{ fontSize: '14px' }}> Amount Paid
                </p>
                <input type="text" placeholder="Enter Amount" className="month-input" />
              </label>
              <label className="mx-2">
                <p className="months-p" style={{ fontSize: '14px' }}>Payment Type
                </p>
                <input type="text" placeholder="Same Month" className="month-input" />
              </label>
            </div>
          </div>
        </div>

        <div className=" row py-4 my-3" >
          <div className="col-md-6 card border-0 history" >
            <div className="m-auto pe-5 fs-6 fw-bold text-start">Month 3</div>
          </div>
          <div className="col-md-6 card border-0 ">
            <div className="fs-6 fw-bold ">
              <label className="mx-2">
                <p className="months-p" style={{ fontSize: '14px' }}>Repayment Amount
                </p>
                <input type="text" placeholder="Enter Amount" className="month-input" />
              </label>
              <label className="mx-2">
                <p className="months-p" style={{ fontSize: '14px' }}> Amount Paid
                </p>
                <input type="text" placeholder="Enter Amount" className="month-input" />
              </label>
              <label className="mx-2">
                <p className="months-p" style={{ fontSize: '14px' }}>Payment Type
                </p>
                <input type="text" placeholder="Same Month" className="month-input" />
              </label>
            </div>
          </div>
        </div>

        <div className=" row py-4 my-3" >
          <div className="col-md-6 card border-0 history" >
            <div className="m-auto pe-5 fs-6 fw-bold text-start">Month 4</div>
          </div>
          <div className="col-md-6 card border-0 ">
            <div className="fs-6 fw-bold ">
              <label className="mx-2">
                <p className="months-p" style={{ fontSize: '14px' }}>Repayment Amount
                </p>
                <input type="text" placeholder="Enter Amount" className="month-input" />
              </label>
              <label className="mx-2">
                <p className="months-p" style={{ fontSize: '14px' }}> Amount Paid
                </p>
                <input type="text" placeholder="Enter Amount" className="month-input" />
              </label>
              <label className="mx-2">
                <p className="months-p" style={{ fontSize: '14px' }}>Payment Type
                </p>
                <input type="text" placeholder="Same Month" className="month-input" />
              </label>
            </div>
          </div>
        </div>

        <div className=" row py-4 my-3" >
          <div className="col-md-6 card border-0 history" >
            <div className="m-auto pe-5 fs-6 fw-bold text-start">Month 5</div>
          </div>
          <div className="col-md-6 card border-0 ">
            <div className="fs-6 fw-bold ">
              <label className="mx-2">
                <p className="months-p" style={{ fontSize: '14px' }}>Repayment Amount
                </p>
                <input type="text" placeholder="Enter Amount" className="month-input" />
              </label>
              <label className="mx-2">
                <p className="months-p" style={{ fontSize: '14px' }}> Amount Paid
                </p>
                <input type="text" placeholder="Enter Amount" className="month-input" />
              </label>
              <label className="mx-2">
                <p className="months-p" style={{ fontSize: '14px' }}>Payment Type
                </p>
                <input type="text" placeholder="Same Month" className="month-input" />
              </label>
            </div>
          </div>
        </div>

        <div className=" row py-4 my-3" >
          <div className="col-md-6 card border-0 history" >
            <div className="m-auto pe-5 fs-6 fw-bold text-start">Month 6</div>
          </div>
          <div className="col-md-6 card border-0 ">
            <div className="fs-6 fw-bold ">
              <label className="mx-2">
                <p className="months-p" style={{ fontSize: '14px' }}>Repayment Amount
                </p>
                <input type="text" placeholder="Enter Amount" className="month-input" />
              </label>
              <label className="mx-2">
                <p className="months-p" style={{ fontSize: '14px' }}> Amount Paid
                </p>
                <input type="text" placeholder="Enter Amount" className="month-input" />
              </label>
              <label className="mx-2">
                <p className="months-p" style={{ fontSize: '14px' }}>Payment Type
                </p>
                <input type="text" placeholder="Same Month" className="month-input" />
              </label>
            </div>
          </div>
        </div>
      </div>

    </div>

  )

}

export default Repaymentform;