import React from "react";
import '../../../index.css';
import '../projects.css';
import Header from '../Header/Header'


const MedRefill = ({ data }) => {
  console.log(data, "data")
  return (
    <div className="container" >
      <Header data={data} />
      <p>
      </p>
    </div>
  );
}

export default MedRefill;
