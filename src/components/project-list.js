import './project-list.css';
import { Route, Link} from "react-router-dom";
import Auburn from '../imgs/auburn-logo.jpeg';
import M3Dimg from '../imgs/m3d-logo.png';
import Uroute from '../imgs/uroute-logo.jpeg';
import Thesis from '../imgs/thesis.png';

const Projects = () =>  {
  return (
    <div className="container portfolio-items flex-row d-flex flex-wrap"> 
      <Link to="/Auburn">
        <div className="p-item">
          <img alt="Auburn Pharmaceutical's Logo" className="p-image" src={Auburn}/>
          <p className="caption">Auburn Pharmaceutical </p>
        </div>
      </Link>
      <Link to="/M3D">
        <div className="p-item">
          <img alt="M3D Experiences Logo" className="p-image" src={M3Dimg}/>
          <p className="caption">M3D Experiences</p>
        </div>
      </Link>
      <Link to="/Uroute">
        <div className="p-item">
          <img alt="Auburn Pharmaceutical's Logo" className="p-image" src={Uroute}/>
          <p className="caption">URoute</p>
        </div>
      </Link>
      <Link to="/M3D">
        <div className="p-item">
          <img alt="Auburn Pharmaceutical's Logo" className="p-image" src={Thesis}/>
          <p className="caption">CCS & HFA Way-finding</p>
        </div>
      </Link>
    </div>
  );
}

export default Projects;
