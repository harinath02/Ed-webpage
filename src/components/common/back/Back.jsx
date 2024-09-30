import React from 'react'
import { useLocation } from 'react-router-dom';

const Back = ({title}) => {

const location = useLocation();

  return (
    <div>
      <section className="back">
        <h2 style={{color:'black'}}>Home / {location.pathname.split("/")[1]}</h2>
        <h1 style={{color:'black'}}>{title}</h1>
      </section>
      <div className="marigin"></div>
    </div>
  )
}

export default Back;
