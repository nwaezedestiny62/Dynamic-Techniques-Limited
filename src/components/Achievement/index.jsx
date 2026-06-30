import React, { useEffect, useState, useRef } from 'react';
import "./Achievement.css";
import ReactOdometer from 'react-odometerjs';
import "odometer/themes/odometer-theme-default.css";

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
                        setProjects(700);
                        setSatisfaction(98);
                        setExperience(27);
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

    return (
        <div className='achievement' ref={sectionRef}>
            <div className="achievement__card">
                <h3 className="title">Completed Over</h3>
                <div className="flex">
                    <ReactOdometer 
                        value={projects} 
                        className='odometer'
                        format="(,ddd)"
                    />
                    <span className="suffix">+</span>
                </div>
                <p>Projects Across Diverse Sectors</p>
            </div>

            <div className="achievement__card">
                <h3 className="title">Client Satisfaction</h3>
                <div className="flex">
                    <ReactOdometer 
                        value={satisfaction} 
                        className='odometer'
                    />
                    <span className="suffix">%</span>
                </div>
                <p>Trusted by Clients Nationwide</p>
            </div>

            <div className="achievement__card">
                <h3 className="title">Years of Excellence</h3>
                <div className="flex">
                    <ReactOdometer 
                        value={experience} 
                        className='odometer'
                    />
                    <span className="suffix">+</span>
                </div>
                <p>Delivering Quality Since 1998</p>
            </div>
        </div>
    );
};

export default Achievement;