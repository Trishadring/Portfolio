import React from "react";
import { Link } from "react-router-dom";
// import { Table, Icon } from 'semantic-ui-react'


const ProjectLinks = ({ data }) => {
  console.log(data, "data")
  return (
    <>
      {data.map((project, i) => {
        const webLink = project.Link[0].Portfolio;
        return (
          <Link to={webLink} key={i}>
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
