import React, { useEffect, useState, useRef } from 'react';
import "./Achievement.css";
import ReactOdometer from 'react-odometerjs';
import "odometer/themes/odometer-theme-default.css";
import { FaCheckCircle, FaUsers, FaClock } from 'react-icons/fa';

const Achievement = () => {
  const [projects, setProjects] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [experience, setExperience] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timeout = setTimeout(() => {
            setProjects(450);
            setSatisfaction(96);
            setExperience(7);
          }, 300);
          return () => clearTimeout(timeout);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      id: 1,
      icon: <FaCheckCircle className="stat-icon" />,
      value: projects,
      suffix: "+",
      title: "Projects Done",
      desc: "Industrial & Power"
    },
    {
      id: 2,
      icon: <FaUsers className="stat-icon" />,
      value: satisfaction,
      suffix: "%",
      title: "Client Happy",
      desc: "Trusted Nationwide"
    },
    {
      id: 3,
      icon: <FaClock className="stat-icon" />,
      value: experience,
      suffix: "+",
      title: "Years Active",
      desc: "Engineering Experts"
    }
  ];

  return (
    <div className="achievement-grid" ref={sectionRef}>
      {stats.map((stat) => (
        <div key={stat.id} className="stat-card">
          <div className="stat-icon-wrapper">
            {stat.icon}
          </div>
          <div className="stat-content">
            <div className="stat-number-wrapper">
              <ReactOdometer 
                value={stat.value} 
                className="stat-odometer" 
                format="(,ddd)" 
              />
              <span className="stat-suffix">{stat.suffix}</span>
            </div>
            <div className="stat-info">
              <h4 className="stat-title">{stat.title}</h4>
              <p className="stat-desc">{stat.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievement;
