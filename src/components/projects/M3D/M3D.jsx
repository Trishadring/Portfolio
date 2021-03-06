import React from "react";
import '../../../index.css';
import '../projects.css';
import amandaCapabilities from './imgs/deshler/amanda/amanda-capabilities.png';
import amandaImageGallery from './imgs/deshler/amanda/amanda-image-gallery.png';
import amandaTeam from './imgs/deshler/amanda/amanda-team.png';
import amandaHome from './imgs/deshler/amanda/amanda-home.png';
import amandaProduct from './imgs/deshler/amanda/amanda-product.png';

import gs3Homepage from './imgs/deshler/gs3/gs3-homepage.png';
import gs3Timeline from './imgs/deshler/gs3/gs3-timeline.png';
import amandaPressroom from './imgs/deshler/gs3/gs3-pressroom.png';

import beaubien from './imgs/m3d-site/m3d-beaubien.png';
import m3dParalee from './imgs/m3d-site/m3d-paralee.png';

import paralee1 from './imgs/paralee/3.jpg';
import paralee2 from './imgs/paralee/2.jpg';



const M3d = () =>  {
  return (
    <div className="container" >
      <h1>M3D EXPERIENCES</h1>
      <p className="eyebrow">2016-2017</p>
      <p>
        I worked for M3D Experiences from June 2016 until September 2017. I began as a graphic design intern and finished as a Graphic and Web Designer. 
        During my time there I worked on designing and implementing Wordpress designs in the Avada theme, as well as making logos, brochures, websites and more. Below are some examples of the work I completed there.
      </p>
      <p>
        Skills used Html, CSS, Wordpress, Avada Theme, Photoshop, Illsutrator.
      </p>
      <h2 className="eyebrow">DESHLER GROUP</h2>
      <hr/>
      <p>
        In anticipation of the GS3 site launch, all Deshler group sites had to be updated to a newer version of word-press and Avada theme. All bug fixing and optimization was done by myself with oversight from my manager. 
        The capabilities page had to be completely redone because of a phased out feature of the theme. A new team page was added and designed by myself.
      </p>
      <p className="pt-5">Amanda Manufacturing Capabilities</p>
      <img className="d-block w-100" src={amandaCapabilities} alt="Amanda Manufacturing Capabilities page"/>
      <p className="pt-5">Amanda Manufacturing Image Gallery</p>
			<img className="d-block w-100" src={amandaImageGallery} alt="Amanda Manufacturing Gallery"/>
      <p className="pt-5">Amanda Manufacturing Team</p>
			<img className="d-block w-100" src={amandaTeam} alt="Amanda Manufacturing Team Page"/>
      <p className="pt-5">Amanda Products Homepage</p>
			<img className="d-block w-100" src={amandaHome} alt="Amanda Products Homepage"/>
      <p className="pt-5">Amanda Products Product Details</p>
			<img className="d-block w-100" src={amandaProduct} alt="Amanda Products Product Detail Page"/>
			
      <h2 className="eyebrow">GS3 SITE</h2>
      <hr/>
      <p>
        This site was fully created in Wordpress by myself and one other person, but unfortunately, the site never launched. 
        The site was created using the Avada theme, which included a lot of custom code created solely for this site, the majority of which was coded by myself. 
        The most extensive and difficult custom code created for this site was the timeline.
        This is due to the old timeline not fitting the current design and lacking the customization options required. All text was written by a copywriter with feedback from the client.
      </p>
      <p className="pt-5">Homepage</p>
      <img className="d-block w-100" src={gs3Homepage} alt="Homepage"/>
      <p className="pt-5">Timeline</p>
      <img className="d-block w-100" src={gs3Timeline} alt="Timeline"/>
      <p className="pt-5">Press Room</p>
      <img className="d-block w-100" src={amandaPressroom} alt="Press Room"/>

      <h2 className="eyebrow">M3D WEBSITE</h2>
      <hr/>
      <p>
      At M3D I was responsible for updating and maintaining the studio's site. 
      I created new pages for different projects, telling the story of each one.
      </p>
      <p className="pt-5">Bobien Fine Foods</p>
      <img className="d-block w-100" src={beaubien} alt="Homepage"/>
      <p className="pt-5">Paralee Boyd</p>
      <img className="d-block w-100" src={m3dParalee} alt="Timeline"/>

      <h2 className="eyebrow">PARALEE BOYD</h2>
      <hr/>
      <p>
        Paralee Boyd is a salon opening up in midtown. I created the banners to advertise the store during construction.
      </p>
      <img className="d-block w-100" src={paralee1} alt="Homepage"/>
      <img className="d-block w-100" src={paralee2} alt="Timeline"/>

    </div>
  );
}

export default M3d;
