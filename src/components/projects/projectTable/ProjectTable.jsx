import React from "react";
import DATA from './ProjectData.js';
import { Table, Icon } from 'semantic-ui-react'

import './ProjectTable.css';

const ProjectTable = () => {
  console.log(DATA, "Data")
  return (
    <Table basic='very'  >
      <Table.Header>
        <Table.Row className="Header">
          <Table.HeaderCell>Year</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Made at</Table.HeaderCell>
          <Table.HeaderCell>Built with</Table.HeaderCell>
          <Table.HeaderCell>Link</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {DATA.map((project, i) => {
          const projectLink = project.Link[0];
          return (
            <Table.Row key={i}>
              <Table.Cell className="Year"
              >
                {project.Year}
              </Table.Cell>
              <Table.Cell className="Title"
              >
                {project.Title}
              </Table.Cell>
              <Table.Cell className="MadeAt"
              >
                {project.MadeAt}
              </Table.Cell>
              <Table.Cell className="tech" >
                {project.BuiltWith.map((tool) => {
                  return (
                    <span>{tool}, </span>
                  )
                })}

              </Table.Cell>
              <Table.Cell className="Link" >
                {projectLink.Github ? <a target="_blank" rel="noopener noreferrer" href={projectLink.Github}>
                  <Icon color='purple' link name='github' size='large' />
                </a> : ''}
                {projectLink.Live ? <a target="_blank" rel="noopener noreferrer" href={projectLink.Live}>
                  <Icon color='purple' link name='external alternate' size='large' />
                </a> : ''}


                {/* <Icon link name='external alternate' size='large' /> */}
                {/* {projectLink.Github} */}
                {/* {projectLink.Live}
                {projectLink.Portfolio} */}

              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
