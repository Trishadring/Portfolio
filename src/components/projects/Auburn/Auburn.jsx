import '../../../index.css';
import '../projects.css';
import aub1 from './imgs/aub1.png';
import aub2 from './imgs/aub2.png';
import aub3 from './imgs/aub3.png';
import aub4 from './imgs/aub4.png';
import aub5 from './imgs/aub5.png';
import gb1 from './imgs/gb1.png';
import gb2 from './imgs/gb2.png';
import gb3 from './imgs/gb3.png';

const Aub = () =>  {
  return (
    <div className="container" >
      <h1>AUBURN PHARMACEUTICAL</h1>
      <p className="eyebrow">2018-2019</p>
      <p>
        Designed and developed front-end of Auburn Pharmaceuticals sites: AuburnGenerics.com, and GenericBid.com. 
        Actively maintained Auburn Pharmaceutical front-end websites that receive four thousand visitors per month. 
        Utilized user feedback report to work with team and improve user experience by decreasing load times. Website included a full rebrand of the company from scratch. 
        Created content for web along with print. Designed and developed email marketing.
      </p>
      <p>
        Skills used Html, CSS, Javascript, Bootstrap, Telerik UI, Google Tag Manager, Typekit, Font Awesome, Asp.Net
      </p>
      <h2 className="eyebrow">AUBURN PHARMACEUTICALS</h2>
      <a href="https://www.auburngenerics.com">Live Site</a>
      <div className="clearfix"></div>

      <p className="pt-5">Auburn Homepage</p>
      <img className="d-block w-100" src={aub1} alt="Homepage"/>
      <p className="pt-5">About Page</p>
      <img className="d-block w-100" src={aub2} alt="about page"/>
      <p className="pt-5">Search Results</p>
      <img className="d-block w-100" src={aub3} alt="Search Results"/>
      <p className="pt-5">Check Out Page</p>
      <img className="d-block w-100" src={aub4} alt="Check Out Page"/>
      <p className="pt-5">Landing Page (After Logged In)</p>
      <img className="d-block w-100" src={aub5} alt="Landing Page"/>

      <h2 className="eyebrow">Generic Bid</h2>
      <a href="https://www.genericbid.com">Live Site</a>
      <hr/>
      <p className="pt-5">Before Logged in</p>
      <img className="d-block w-100" src={gb1} alt="homepage"/>
      <p className="pt-5">After Logged in</p>
      <img className="d-block w-100" src={gb2} alt="logged in"/>
      <p className="pt-5">Details Page</p>
      <img className="d-block w-100" src={gb3} alt="details page"/>
    </div>
  );
}

export default Aub;
