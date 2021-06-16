import React from 'react';
import Messagebox from './messagebox'
import Messageboxanswer from './messageboxanswer'
import Dashboard from './Dashboard/dashboard';



const Mainpage = () => {
 return (
  <div>
   <Messagebox />
   <Messageboxanswer />
   <Dashboard />
  </div>
 )
}

export default Mainpage;