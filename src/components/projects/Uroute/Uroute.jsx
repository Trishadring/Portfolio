import React from "react";
import '../../../index.css';
import '../projects.css';

import homePage from './imgs/big.png';
import contact from './imgs/CONTACT.png';
import signUp from './imgs/SIGN2.png';

const Uroute = () =>  {
  return (
    <div className="container" >
      <h1>UROUTE</h1>
      <p className="eyebrow">2017</p> 
      <p>
        Designed and Developed the front end of Uroute's site. Designed a new logo, icons, and created a new branding guide for the company. Re-designed the interior web application. 
        Conducted customer surveys to find out what parts of the website and application should be changed to better suit the customers needs. Worked closely with a Back End developer to implement all changes.
      </p>
      <p>
        Skills used Html, CSS, Bootstrap, Photoshop, Illsutrator
      </p>
      <br></br>
      <hr/> 
      <p className="pt-5">Homepage</p>
      <img className="d-block w-100" src={homePage} alt="Homepage"/>
      <p className="pt-5">Contact</p>
      <img className="d-block w-100" src={contact} alt="Contact"/>
      <p className="pt-5">Sign up</p>
      <img className="d-block w-100" src={signUp} alt="Sign up"/>
    </div>
  );
}

export default Uroute;
