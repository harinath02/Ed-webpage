import React from 'react';
import './hero.css';
import Heading from '../../common/heading/Heading';

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
            <div className="row">
                <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education'/>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime doloremque ratione dolorem vero totam. Aperiam nam excepturi corrupti eligendi ex enim, consectetur doloribus, explicabo pariatur doloremque hic eius perspiciatis illum?
                </p>
                <div className="button">
                    <button className="primary-btn">
                        GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                    <button>
                        VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                </div>
            </div>
        </div>
      </section>
      <div className="marigin"></div>
    </div>
  )
}

export default Hero;
