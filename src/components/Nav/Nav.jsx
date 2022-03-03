import './nav.css'
import '../../index.css';
import { Link, } from "react-router-dom";
import LogoS from './imgs/logo-sm.png';
import Logo1 from "./imgs/logo-01.png";

const Nav = () => {
  return (
    <div >
      <header className="navbar">
        <div className="container">
          <Link to="/">
            <p className="mb-0 navbar-brand">
              <img
                alt="Trisha Dring"
                className="image logo d-sm-none"
                src={LogoS}
              />
              <img
                className="image logo d-none d-sm-block"
                alt="Trisha Dring"
                src={Logo1}
              />
            </p>
          </Link>
          <ul className="nav">
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link active"
                aria-current="page"
              >
                About
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/">Resume</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="mailto:trisha.dring+website@gmail.com">Contact</a>
            </li>
          </ul>
        </div>
      </header>

    </div>
  );
}

export default Nav;
