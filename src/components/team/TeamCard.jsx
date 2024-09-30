import React from "react";
import { team } from "../../dummydata"

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt=''/>
            <div className='overlay'>
              <i className='icon fab fa-facebook-f'></i>
              <i className='icon fab fa-instagram'></i>
              <i className='icon fab fa-pinterest'></i>
              <i className='icon fab fa-linkedin'></i>
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
