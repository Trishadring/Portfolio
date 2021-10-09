import '../../App.css';
import './projects.css';

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
      <img className="d-block w-100" src="/imgs/aub1.png" alt="First slide"/>
      <p className="pt-5">About Page</p>
      <img className="d-block w-100" src="/imgs/aub2.png" alt="Second slide"/>
      <p className="pt-5">Search Results</p>
      <img className="d-block w-100" src="/imgs/aub3.png" alt="Third slide"/>
      <p className="pt-5">Check Out Page</p>
      <img className="d-block w-100" src="/imgs/aub4.png" alt="Third slide"/>
      <p className="pt-5">Landing Page (After Logged In)</p>
      <img className="d-block w-100" src="/imgs/aub5.png" alt="Third slide"/>

      <h2 className="eyebrow">Generic Bid</h2>
      <a href="https://www.genericbid.com">Live Site</a>
      <hr/>
      <p className="pt-5">Before Logged in</p>
      <img className="d-block w-100" src="/imgs/gb1.png" alt="First slide"/>
      <p className="pt-5">After Logged in</p>
      <img className="d-block w-100" src="/imgs/gb2.png" alt="Second slide"/>
      <p className="pt-5">Details Page</p>
      <img className="d-block w-100" src="/imgs/gb3.png" alt="Third slide"/>
    </div>
  );
}

export default Aub;
