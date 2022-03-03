import React from "react";
import { Route, Routes } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Projects from '../ProjectList/Project-list';
import { AnimalCrossing, Auburn, M3D, Uroute, Thesis } from '../../components/projects/index.jsx'
import About from '../About/About';
import Nav from '../../components/Nav/Nav'
import DATA from '../../components/projects/projectTable/ProjectData.js';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Projects data={DATA} />} />
        <Route path="/ACNH" element={<AnimalCrossing />} />
        <Route path="/Auburn" element={<Auburn />} />
        <Route path="/about" element={<About />} />
        <Route path="/M3D" element={<M3D />} />
        <Route path="/Uroute" element={<Uroute />} />
        <Route path="/FixHFA" element={<Thesis />} />
        {/* <Route exact path="/">
        <Redirect to="/projects" />
      </Route> */}
      </Routes>
    </>
  );
}

export default App;
