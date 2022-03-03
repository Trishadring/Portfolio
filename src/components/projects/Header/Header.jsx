import React from "react";
import '../../../index.css';
import '../projects.css';
import './Header.css';
import { Icon, Button } from 'semantic-ui-react'



const Header = ({ data }) => {
  const projectLink = data.Link[0];
  return (
    <>
      <h1>{data.Title} </h1>
      <p className="eyebrow">{data.Year}</p>
      <p>
        {data.Decription}
      </p>
      <p>
        Skills used {data.BuiltWith}.
      </p>
      <p>
        {projectLink.Github ? <a target="_blank" rel="noopener noreferrer" href={projectLink.Github}>
          <Button icon size='large' basic>
            <Icon name='github' /> GitHub</Button>
        </a> : ''}
        {projectLink.Live ? <a target="_blank" rel="noopener noreferrer" href={projectLink.Live}>
          <Button icon size='large' basic>
            <Icon name='external alternate' /> Live Site</Button>
        </a> : ''}
      </p>
    </>
  );
}

export default Header;
