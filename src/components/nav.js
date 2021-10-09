import './nav.css'
import {Route, Link, Redirect} from "react-router-dom";
import LogoS from '../imgs/logo-sm.png';
import Logo1 from "../imgs/logo-01.png";
import Projects from './project-list';
import Aub from './projects/auburn';
import M3d from './projects/m3d';
import Uroute from './projects/uroute';
import Thesis from './projects/thesis';
import About from './about';
import ACNH from './projects/acnh';

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
              <a className="nav-link active" aria-current="page" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Resume</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="mailto:trisha.dring+website@gmail.com">Contact</a>
            </li>
          </ul>
        </div>
      </header>
      <Route path="/projects" component={Projects} />
      <Route path="/ACNH" component={ACNH}/>
      <Route path="/Auburn" component={Aub}/>
      <Route path="/about" component={About}/>
      <Route path="/M3D" component={M3d}/>
      <Route path="/Uroute" component={Uroute}/>
      <Route path="/FixHFA" component={Thesis}/>
      <Route exact path="/">
        <Redirect to="/projects" />
      </Route>
      
  </div>
  );
}

export default Nav;
