
import React from 'react';
import AddProjectComponent from './addprojectComponent';
import HeaderComponent from '../header/headerComponent';
import SidebarComponent from '../sidebar/sidebarComponent';

const AddProjectPage: React.FC = () => {
  return (
    <>
        <SidebarComponent />
        <HeaderComponent />
        <AddProjectComponent />;
    </>
  );
  
};

export default AddProjectPage;
