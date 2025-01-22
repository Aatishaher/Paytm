// src/pages/dashboard.jsx
import React from 'react';
import Appbar from '../Components/Appbar';
import Balance from '../Components/Balance';
import Users from '../Components/Users';

const Dashboard = () => {
  return (
    <div>
      <Appbar></Appbar>
        <div className="m-8">
            <Balance value={"10,000"}></Balance>
            <Users></Users>
        </div>
    </div>
  );
};

export default Dashboard;
