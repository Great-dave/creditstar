import React from 'react';
import './sidebar.css';
import Header from './header'
import { Pie } from 'react-chartjs-2';


const Sidebar = () => {
  return (
    <div className="sidebar ">
      <div className="side-1">
        <div className="dashboard-container">
          <div className="creditstar mt-3 mb-5">
            <section className="my-1 mx-4 pt-4 ps-1 sect">
              <div class="row my-5 ps-1">
                <div class="col">
                  <a className="nav-link" href="/">
                    <img src="https://res.cloudinary.com/ddqa7ztdb/image/upload/v1621239200/Group-6%20inter-track-project/creditstar_logo_kzt3im.png" alt="credit-logo" className="" />
                  </a>
                </div>
              </div>

              <div class="row my-4">
                <div class="col-6 px-3">
                  <a className="nav-link home text-light fw-bold " href="/">
                    <i className="fas fa-home px-1 mx-2 mb-3"></i>Home
      </a>
                </div>
              </div>

              <div class="row my-4">
                <div class="col-6 px-3">
                  <a className="nav-link fw-bold  card-request" href="/">
                    <i className="far fa-credit-card me-1 mb-3 ms-1 pe2"></i>
       Card Request
        </a>
                </div>
              </div>
              <div class="row my-4">
                <div class="col-6 px-3">
                  <a className="nav-link prediction px-3 " href="/">
                    <div class="dropdown">
                      <i className="fas fa-bolt  mb-3"></i>
                      <button class="btn btn-outline-light border-0 dropdown-toggle prediction fw-bold  px-1 ms-2" type="button" id="dropdownMenuButton2"
                        data-bs-toggle="dropdown" aria-expanded="false">Predictions
          </button>
                      <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                        <li><a class="dropdown-item" href="/">Approved</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="/">Red Flags</a></li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div class="row my-4">
                <div class="col-6 px-3">
                  <a className="nav-link fw-bold  faq" href="/">
                    <i className="far fa-question-circle mb-3 px-1 mx-1"></i> FAQs
       </a>
                </div>
              </div>
              <div class="row my-4">
                <div class="col-6 px-3">
                  <a className="nav-link report  fw-bold" href="/">
                    <i className="fas fa-exclamation-triangle mb-3 px-1 mx-1"></i>Report Bugs
         </a>
                </div>
              </div>
            </section>
          </div>

          <div className="overview mx-4 mt-3 px-3">
            <Header className="over" header="Overview">
            </Header>
          </div>

          <div className="welcome pt-3 mx-4 my-4 ps-3">
            <div class="row">
              <div class="col-10">
                <div className="welcome-seg pe-1 fs-4 fw-bolder">Welcome, Segun
        <p className="text-dark user-p fs-6 fw-bold mb-4">USER ID: GTB939484</p>
                </div>
                <a className="nav-link my-auto mx-3 mt-4 py-3 px-3 fs-6 new-prediction text-light fw-bold text-center" href="/">RUN NEW PREDICITON</a>
              </div>
            </div>
          </div>

          <div className="pie pt-3 mx-4 pb-5 mb-5 ps-3">
            <div class="row">
              <div class="col-sm-10">
                <div>
                  <h5>Analysis Chart</h5>
                  <p>Total Applicants:30,000</p>
                </div>
                <Pie
                  data={{
                    labels: ['Approved', 'Red Flags'],
                    datasets: [{
                      data: [75, 25],
                      backgroundColor: ['#17A514', '#D01212']
                    }]
                  }}
                  options={{
                    title: {
                      display: true,
                      text: 'Analysis Chart, Total Applicants=30,000',
                      padding: {
                        top: 10,
                        bottom: 20,
                      },
                      position: 'top',
                    },
                    is3D: true,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="approved mx-3 my-4">
            <h5 className="fs-4 mt-4 mx-4">Recently Approved Requests</h5>
            <div className="row py-4 px-3">
              <div className="col-sm-6 col-md-2 px-2 ">
                <ul className="list-unstyled">
                  <li className=""><a className="nav-link serial text-start fw-bold fs-6" href="/">S/N</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">1</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">2</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">3</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">4</a></li>
                </ul>
              </div>

              <div className="col-sm-6 col-md-3 px-1 ">
                <ul className="list-unstyled">
                  <li className=""><a className="nav-link Id-num fw-bold text-center fs-6" href="/">ID NO</a></li>
                  <li className=""><a className="nav-link text-center text-dark fw-bold" href="/">939 484 702</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">939 484 702</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">939 484 702</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">939 484 702</a></li>
                </ul>
              </div>

              <div className="col-sm-6 col-md-3 px-2 ">
                <ul className="list-unstyled">
                  <li className=""><a className="nav-link serial text-start fw-bold fs-6" href="/">Limit:</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">200,000</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">200,000</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">200,000</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">200,000</a></li>
                </ul>
              </div>

              <div className="col-sm-6 col-md-3 px-2 ">
                <ul className="list-unstyled">
                  <li className=""><a className="nav-link serial text-start fw-bold fs-6" href="/">DATE</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">8 | 12 | 20</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">8 | 12 | 20</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">8 | 12 | 20</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">8 | 12 | 20</a></li>
                </ul>
              </div>
            </div>

            <a className="nav-link fw-bold fs-5 view-more px-2 my-3 mx-3" href="/">View More<i className="fas fa-angle-double-right px-2"></i>
            </a>
          </div>

          <div className="red-flag mx-3 my-4">
            <h5 className="fs-4 mt-4 mx-4 text-dark">Recent Red Flags</h5>
            <div className="row py-4 px-3">
              <div className="col-sm-6 col-md-2 px-2 ">
                <ul className="list-unstyled">
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">S/N</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">1</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">2</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">3</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">4</a></li>
                </ul>
              </div>

              <div className="col-sm-6 col-md-3 px-1 ">
                <ul className="list-unstyled">
                  <li className=""><a className="nav-link Id-num fw-bold text-center fs-6" href="/">ID NO</a></li>
                  <li className=""><a className="nav-link text-center text-dark fw-bold" href="/">9939 484 702</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">939 484 702</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">939 484 702</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">939 484 702</a></li>
                </ul>
              </div>

              <div className="col-sm-6 col-md-3 px-2 ">
                <ul className="list-unstyled">
                  <li className=""><a className="nav-link serial text-start fw-bold fs-6" href="/">Limit:</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">200,000</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">200,000</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">200,000</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">200,000</a></li>
                </ul>
              </div>

              <div className="col-sm-6 col-md-3 px-2 ">
                <ul className="list-unstyled">
                  <li className=""><a className="nav-link serial text-start fw-bold fs-6" href="/">DATE</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">8 | 12 | 20</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">8 | 12 | 20</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">8 | 12 | 20</a></li>
                  <li className=""><a className="nav-link text-dark fw-bold" href="/">8 | 12 | 20</a></li>
                </ul>
              </div>
            </div>

            <a className="nav-link fw-bold fs-5 view-more px-2 my-3 mx-3" href="/">View More<i className="fas fa-angle-double-right px-2"></i>
            </a>
          </div>
        </div>

      </div>


    </div>
  )
}



export default Sidebar;