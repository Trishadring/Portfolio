import React from "react";
import { Route, Routes } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Projects from '../ProjectList/Project-list';
import { AnimalCrossing, Auburn, M3D, Uroute, Thesis } from '../../components/projects/index'
import About from '../About/About';
import Nav from '../../components/Nav/Nav'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Projects />} />
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
