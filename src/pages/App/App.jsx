import React from "react";
import { Route, Routes } from "react-router-dom";

import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Projects from '../ProjectList/Project-list';

import { AnimalCrossing, War, Auburn, M3D, Uroute, Thesis, MedRefill, EveryJob, Pizza } from '../../components/projects/index.jsx'
import About from '../About/About';
import Nav from '../../components/Nav/Nav'
import DATA from '../../components/projects/projectTable/ProjectData.js';

const App = () => {
  let ACNHd = DATA.find(o => o.componentName === "AnimalCrossing");
  let Auburnd = DATA.find(o => o.componentName === "Auburn");
  let Ward = DATA.find(o => o.componentName === "War");
  let MedRefilld = DATA.find(o => o.componentName === "MedRefill");
  let EveryJobd = DATA.find(o => o.componentName === "everyJob");
  let Pizzad = DATA.find(o => o.componentName === "Pizza");
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Projects data={DATA} />} />
        <Route path="/AnimalCrossing" element={<AnimalCrossing data={ACNHd} />} />
        <Route path="/Auburn" element={<Auburn data={Auburnd} />} />
        <Route path="/War" element={<War data={Ward} />} />
        <Route path="/MedRefill" element={<MedRefill data={MedRefilld} />} />
        <Route path="/EveryJob" element={<EveryJob data={EveryJobd} />} />
        <Route path="/Pizza" element={<Pizza data={Pizzad} />} />
        <Route path="/about" element={<About />} />
        <Route path="/M3D" element={<M3D />} />
        <Route path="/Uroute" element={<Uroute />} />
        <Route path="/FixHFA" element={<Thesis />} />
      </Routes>
    </>
  );
}

export default App;
