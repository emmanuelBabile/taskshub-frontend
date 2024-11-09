
import React from 'react';
import ProjectsComponent from './projectsComponent';
import HeaderComponent from '../header/headerComponent';
import SidebarComponent from '../sidebar/sidebarComponent';

const ProjectsPage: React.FC = () => {
  return (
    <>
        <SidebarComponent />
        <HeaderComponent />
        <ProjectsComponent />
    </>
  );
};

export default ProjectsPage;
