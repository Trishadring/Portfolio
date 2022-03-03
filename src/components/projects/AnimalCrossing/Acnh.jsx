import '../../../index.css';
import '../projects.css';

const ACNH = () => {
  return (
    <div className="container" >
      <h1>Animal Crossing:NH Critters React App</h1>
      <p className="eyebrow">2018-2019</p>
      <p>
        This was my final project for my React Class through Grand Assembly.
        The site will show you the current bugs or fish that you can catch in the game.
        The idea for the site was based on frustration I had while playing the game.
        There were tons of resources that would show you what bug or fish you could catch that month but nothing that would filter it by the current time.
      </p>
      <p>
        To filter the site you can choose between fish or bugs then choose the hemisphere that you picked for your game.
        I even added a feature to hide the creatures that you have already caught in the game to narrow the list down to what you have still to catch.
        There was no api to pull from so I created my own json mini database to work with.
      </p>
      <p>
        Skills used Html, CSS, Javascript, ES6, Heroku, React.js,
      </p>
      <h2 className="eyebrow">Critters App</h2>
      <a className="link" target="_blank" rel="noopener noreferrer" href="https://animal-crossing-nh.herokuapp.com/">Live Site</a>
      <a className="link" target="_blank" rel="noopener noreferrer" href="https://github.com/Trishadring/Animal-Crossing-React">Github Code</a>
      <div className="clearfix"></div>


    </div>
  );
}

export default ACNH;