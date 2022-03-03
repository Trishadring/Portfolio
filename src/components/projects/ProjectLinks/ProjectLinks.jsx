import React from "react";
import { Link } from "react-router-dom";
// import { Table, Icon } from 'semantic-ui-react'


const ProjectLinks = ({ data }) => {
  return (
    <>
      {data.map((project, i) => {
        return (
          <Link to={`/${project.componentName}`} key={i}>
            <div className="p-item" >
              <p className="caption">{project.Title}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default ProjectLinks;
