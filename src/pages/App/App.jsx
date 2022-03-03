import { Route, Routes } from "react-router-dom";
import './App.css';
import Projects from '../ProjectList/Project-list';
import Aub from '../../components/projects/Auburn/Auburn';
import M3d from '../../components/projects/M3D/M3D';
import Uroute from '../../components/projects/Uroute/Uroute';
import Thesis from '../../components/projects/Thesis/Thesis';
import About from '../About/About';
import ACNH from '../../components/projects/AnimalCrossing/Acnh';
import Nav from '../../components/Nav/Nav'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Projects/> } />
        <Route path="/ACNH" element={<ACNH/> } />
        <Route path="/Auburn" element={<Aub/> } />
        <Route path="/about" element={<About/> } />
        <Route path="/M3D" element={<M3d/> } />
        <Route path="/Uroute" element={<Uroute/> } />
        <Route path="/FixHFA" element={<Thesis/> } />
        {/* <Route exact path="/">
        <Redirect to="/projects" />
      </Route> */}
      </Routes>
    </>
  );
}

export default App;
