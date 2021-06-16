import React from 'react';
import Sidebar from './sidebar';
import Flagged from './flagged'
import Approved from './approved'
import Cardrequest from './card-request'
// import Header from './header';
// import './dashboard.css';


const Dashboard = () => {
 return (
  <div className="dashboard-bg">

   <Sidebar />
   <Cardrequest />
   <Approved />
   <Flagged />
   {/* <headerMainPage /> */}

  </div>
 )
}

export default Dashboard;