import './project-list.css';
import Auburn from '../imgs/auburn-logo.jpeg';
import M3D from '../imgs/m3d-logo.png';
import Uroute from '../imgs/uroute-logo.jpeg';
import Thesis from '../imgs/thesis.png';

function Projects() {
  return (
    <div className="container portfolio-items flex-row d-flex flex-wrap"> 
      <div className="p-item">
        <img alt="Auburn Pharmaceutical's Logo" className="p-image" src={Auburn}/>
        <p className="caption">Auburn Pharmaceutical </p>
      </div>
      <div className="p-item">
        <img alt="M3D Experiences Logo" className="p-image" src={M3D}/>
        <p className="caption">M3D Experiences</p>
      </div>
      <div className="p-item">
        <img alt="Auburn Pharmaceutical's Logo" className="p-image" src={Uroute}/>
        <p className="caption">URoute</p>
      </div>
      <div className="p-item">
        <img alt="Auburn Pharmaceutical's Logo" className="p-image" src={Thesis}/>
        <p className="caption">CCS & HFA Way-finding</p>
      </div>
    </div>
  );
}

export default Projects;
