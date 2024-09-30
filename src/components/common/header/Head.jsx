import React from 'react'
import './head.css';


const Head = () => {
  return (
    <div>
      <section className="head">
        <div className="container flexSB">
            <div className="logo">
                <h1>ACADEMIA</h1>
                <span>ONLINE EDUCATION & LEARNING</span>
            </div>
            <div className="social">
                <i className="icon fab fa-facebook-f"></i>
                <i className="icon fab fa-instagram"></i>
                <i className="icon fab fa-pinterest"></i>
                <i className="icon fab fa-linkedin"></i>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Head;
