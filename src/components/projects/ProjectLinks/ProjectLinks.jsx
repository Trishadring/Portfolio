import React from "react";
import DATA from '../projectTable/ProjectData.js';
import { Link } from "react-router-dom";
// import { Table, Icon } from 'semantic-ui-react'


const ProjectLinks = () => {
  console.log(DATA, "Data")
  return (
    <>
      {DATA.map((project, i) => {
        return (
          <div className="p-item" key={i}>
            <p className="caption">{project.Title}</p>
          </div>
        );
      })}
    </>
  );
}

export default ProjectLinks;
