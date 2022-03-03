import React from "react";
import '../../../index.css';
import '../projects.css';
import Header from '../Header/Header'

const ACNH = ({ data }) => {
  console.log(data)
  return (
    <div className="container" >
      <div className="container" >
        <Header data={data} />
      </div>
    </div>
  );
}

export default ACNH;