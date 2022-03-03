import React from "react";
import './project-list.css';
import { Link } from "react-router-dom";
import { Icon } from 'semantic-ui-react'
import ProjectTable from '../../components/projects/projectTable/ProjectTable'
import ProjectLinks from '../../components/projects/ProjectLinks/ProjectLinks'

const Projects = ({data}) => {
  return (
    <div className="container portfolio-items">
      {/* <ProjectTable /> */}
      <ProjectLinks data={data} />
      <Link to="/M3D">
        <div className="p-item">
          <p className="caption">M3D Experiences</p>
        </div>
      </Link>
      <Link to="/Uroute">
        <div className="p-item">
          <p className="caption">URoute</p>
        </div>
      </Link>
      <Link to="/FixHFA">
        <div className="p-item">
          <p className="caption">CCS & HFA Way-finding</p>
        </div>
      </Link>


    </div>
  );
}

export default Projects;
