
import React from 'react';
import ProjectComponent from './projectdetailComponent.jsx';
import HeaderComponent from '../header/headerComponent';
import SidebarComponent from '../sidebar/sidebarComponent';

const ProjectDetailPage: React.FC = () => {
  return (
    <>
        <SidebarComponent />
        <HeaderComponent />
        <ProjectComponent />
    </>
  );
};

export default ProjectDetailPage;
