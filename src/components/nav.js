import './nav.css'
import LogoS from '../imgs/logo-sm.png';
import Logo1 from "../imgs/logo-01.png";

function Nav() {
  return (
    <div >
      <header className="navbar">
        <div className="container">
          <a className="mb-0 navbar-brand">
            <img alt="Trisha Dring" className="image logo d-sm-none" src={LogoS}/>
            <img className="image logo d-none d-sm-block" alt="Trisha Dring" src={Logo1}/>
          </a>
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
  </div>
  );
}

export default Nav;
