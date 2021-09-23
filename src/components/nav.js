import './nav.css'
import { Route, Link, Redirect} from "react-router-dom";
import LogoS from '../imgs/logo-sm.png';
import Logo1 from "../imgs/logo-01.png";
import Projects from './project-list';
import Aub from './projects/auburn';
import M3d from './projects/m3d';

const Nav = () => {
  return (
    <div >
      <header className="navbar">
        <div className="container">
        <Link to="/projects">
          <p className="mb-0 navbar-brand">
            <img alt="Trisha Dring" className="image logo d-sm-none" src={LogoS}/>
            <img className="image logo d-none d-sm-block" alt="Trisha Dring" src={Logo1}/>
          </p>
          </Link>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Contact</a>
            </li>
          </ul>
        </div>
      </header>
      <Route exact path="/projects" component={Projects} />
      <Route path="/Auburn" component={Aub}/>
      <Route path="/M3D" component={M3d}/>
      <Route exact path="/">
        <Redirect to="/projects" />
      </Route>
  </div>
  );
}

export default Nav;
