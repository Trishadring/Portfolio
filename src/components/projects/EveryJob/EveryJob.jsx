import React from "react";
import '../../../index.css';
import '../projects.css';
import Header from '../Header/Header'

const EveryJob = ({ data }) => {
  console.log(data, "data")
  return (
    <div className="container" >
      <Header data={data} />
      <p>
      </p>
    </div>
  );
}

export default EveryJob;
