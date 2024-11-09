
import React from 'react';
import DashboardComponent from './dashboardComponent';
import HeaderComponent from '../header/headerComponent';
import SidebarComponent from '../sidebar/sidebarComponent';

const DashboardPage: React.FC = () => {
  return (
    <>
        <SidebarComponent />
        <HeaderComponent />
        <DashboardComponent />;
    </>
  );
  
};

export default DashboardPage;
