import '../../index.css';
import './about.css';

const About = () =>  {
  return (
    <div className="container" >
      <h1>About Me</h1>
			<p className="explain">Hi. I'm Trisha</p>
      <p>
        I like to Code.
        I've been working on getting a Front end Development job. 
      </p>
      <div>
        <a className="link" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/trisha-dring-1488b95b/">Linkedin</a>
        <a className="link" rel="noopener noreferrer" target="_blank" href="https://github.com/Trishadring">GitHub</a>
        <a className="link" rel="noopener noreferrer" target="_blank" href="https://www.ebay.com/str/gagnierfabric">Ebay Store</a>
        <a className="link" rel="noopener noreferrer" target="_blank" href="https://www.etsy.com/shop/GagnierInc?ref=profile_header">Etsy</a>
      </div>
    </div>
  );
}

export default About;
