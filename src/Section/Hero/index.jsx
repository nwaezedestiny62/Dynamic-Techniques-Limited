import React from 'react';
import Achievement from '../../components/Achievement';
import { FaArrowDown } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import { crane } from "../../assets";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero__container">
        <div className="hero__content">
          
          {/* Left Column */}
          <div className="hero__left">

            <h1 className="hero__heading">
              Engineering Excellence,<br />
              Powering Tomorrow
            </h1>
            
            <p className="hero__description">
              We deliver world-class industrial engineering solutions specializing in 
              electrical systems, automation, and power infrastructure. 
              Transforming challenges into reliable, high-performance results.
            </p>

            <Achievement />

            <div className="hero__buttons">
              <Link 
                to="gallery" 
                smooth={true} 
                duration={800}
                className="btn primary"
              >
                View Our Projects
                <FaArrowDown className="btn-icon" />
              </Link>
              
              <Link 
                to="contact" 
                smooth={true} 
                duration={800}
                className="btn secondary"
              >
                Get a Free Quote
                <FaArrowDown className="btn-icon" />
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hero__right">
            <div className="hero__image-wrapper">
              <img src={crane} alt="Industrial electrical and automation project" />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;