import './project-list.css';
import {Link} from "react-router-dom";

const Projects = () =>  {
  return (
    <div className="container portfolio-items"> 
      <Link to="/ACNH">
        <div className="p-item">
          <p className="caption">Animal Crossing Project</p>
        </div>
      </Link>
      <Link to="/Auburn">
        <div className="p-item">
          <p className="caption">Auburn Pharmaceutical </p>
        </div>
      </Link>
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
