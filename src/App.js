import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import Campaign from './components/Campaign';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },3000);
  }
  const showCampaign = useSelector(state => state.campaign.campaignIsVisible);
  const showDashboard = useSelector(state => state.dashboard.dashboardIsVisible);
  
  return (
    <Fragment>
        <Alert alert={alert} />
        <Header/>
        {showCampaign && <Campaign showAlert={showAlert}/>}
        {showDashboard && <Dashboard/>}
    </Fragment>
    // <Fragment>
    //   <Router>
    //     <Alert alert={alert} />
    //     <Header/>
    //     <Routes>
    //       <Route path="/" element={<Campaign showAlert={showAlert}/>}/>
    //       <Route path="/dashboard" element={<Dashboard/>}/>
    //     </Routes>
    //   </Router>
    // </Fragment>
  );
};

export default App;