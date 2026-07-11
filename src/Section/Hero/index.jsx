import React from 'react';
import Achievement from '../../components/Achievement';
import { FaArrowRight, FaPlay } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import "./Hero.css";
import heroVideo from "../../videos/hero-bg.mp4";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      {/* Background Video Overlay */}
      <div className="hero__video-container">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero__video"
          poster="../../assets/structure.jpg" // Fallback image
        >
          {/* User will input their local storage video path here */}
          <source src={heroVideo} />
          Your browser does not support the video tag.
        </video>
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__container">
        <div className="hero__content">
          {/* Left Column - Text Content */}
          <div className="hero__left">
            <div className="hero__badge">
              <span className="pulse-icon"></span>
              Industry Leaders in Engineering
            </div>
            
            <h1 className="hero__heading">
              Engineering <span className="text-gradient">Excellence</span>,<br /> 
              Powering the Future
            </h1>
            
            <p className="hero__description">
              Dynamic Technique delivers world-class industrial engineering solutions. 
              We specialize in electrical systems, automation, and power infrastructure, 
              transforming complex challenges into reliable, high-performance results.
            </p>

            <div className="hero__stats-wrapper">
               <Achievement />
            </div>

            <div className="hero__actions">
              <Link 
                to="gallery" 
                smooth={true} 
                duration={800} 
                className="btn-primary"
              >
                Explore Projects
                <FaArrowRight className="btn-icon" />
              </Link>
              
              <Link 
                to="contact" 
                smooth={true} 
                duration={800} 
                className="btn-outline"
              >
                <FaPlay className="btn-icon-play" />
                Request Consultation
              </Link>
            </div>
          </div>

          {/* Right Column - Decorative Element or Floating Card */}
          <div className="hero__right">
            <div className="floating-card">
              <div className="card-glass">
                <div className="card-header">
                  <div className="status-dot"></div>
                  <span>Operational Status: Optimal</span>
                </div>
                <div className="card-body">
                  <h4>Next-Gen Automation</h4>
                  <p>Integrating AI-driven controls for industrial efficiency.</p>
                </div>
                <div className="card-footer">
                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
