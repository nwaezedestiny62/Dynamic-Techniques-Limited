import React from "react";
import { Link } from "react-scroll";
import "./Services.css";
import { sketch } from "../../assets";
import { services } from "../../data";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="overlay__div">
        <div className="container">
          <div className="section-header">
            <span className="sub-heading">OUR EXPERTISE</span>
            <h2 className="title">
              Powering Industries with Technical Excellence
            </h2>
            <p className="muted description">
              We provide expert industrial engineering solutions with a strong focus 
              on electrical systems, automation, and power infrastructure. From project 
              planning and design to installation, testing, and maintenance — we deliver 
              reliable, high-quality results that keep your operations running at peak performance.
            </p>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-70}
              className="btn primary"
            >
              Book Consultation
            </Link>
          </div>
          <div className="object__contain">
            <img
              src={sketch}
              alt="Industrial electrical and automation project"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid services">
          {services.map((service, index) => (
            <article className="service" key={`${service.title}-${index}`}>
              <div className="flex top">
                <div className="flex__center icon">
                  {service.icon}
                </div>
                <h4 className="title">
                  {service.title}
                </h4>
              </div>
              <div className="middle">
                <p className="description">
                  {service.description}
                </p>
              </div>
              <div className="flex bottom">
                <Link
                  to="contact"
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="btn"
                >
                  Reach Out
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;