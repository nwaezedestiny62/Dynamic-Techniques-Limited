import React from 'react';
import "./About.css";
import { about } from "../../assets";
import { keypoints } from '../../data';

const About = () => {
  return (
    <section id="about">
      <div className="overlay__div">
        <div className="container">
          {/* Image Side */}
          <div className="about__image">
            <img src={about} alt="Dynamic Techniques team on industrial site" />
          </div>

          {/* Content Side */}
          <div className="section__header">
            <h3 className="title">About Us</h3>
            <h1 className="sub__heading">
              Engineering Excellence, Powering Industries
            </h1>
            <p className="description">
              At Dynamic Technique, we specialize in delivering high-quality 
              industrial engineering solutions with expertise in electrical systems, 
              automation, and power infrastructure. Since 2018, we have been committed 
              to providing reliable, safe, and innovative technical solutions that help 
              Nigerian industries operate more efficiently and productively.
            </p>

            <div className="keypoints__container">
              {keypoints.map((keypoint, index) => (
                <div className="flex keypoint" key={index}>
                  <div className="flex__center primary icon">
                    {keypoint.icon}
                  </div>
                  <h4 className="title">{keypoint.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;