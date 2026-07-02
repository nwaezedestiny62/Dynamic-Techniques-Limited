import React, { useEffect, useRef } from 'react';
import "./Team.css";
import { teamMembers } from '../../data';
import { motion, useAnimationControls } from 'framer-motion';

const Team = () => {
  const containerRef = useRef(null);
  const controls = useAnimationControls();
  const isHovered = useRef(false);

  // Duplicate members for seamless infinite scroll
  const duplicatedMembers = [...teamMembers, ...teamMembers];

  useEffect(() => {
    const startAutoScroll = async () => {
      const cardWidth = 380; // Adjust based on your card width + gap
      const totalWidth = cardWidth * teamMembers.length;

      while (true) {
        if (!isHovered.current) {
          await controls.start({
            x: [-totalWidth, 0],
            transition: {
              duration: 35,           // Slow movement (increase = slower)
              ease: "linear",
              repeat: Infinity,
            }
          });
        }
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    };

    startAutoScroll();
  }, [controls]);

  return (
    <section id='team' className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-12 items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Meet Our <span className="text-orange-500">Experts</span>
            </h2>
            <p className="text-xl text-orange-100/80 leading-relaxed">
              The passionate minds behind every success. 
              Creative, dedicated, and always pushing boundaries.
            </p>
          </motion.div>
        </div>

        {/* Auto-playing Team Scroll */}
        <div 
          className="team__scroll-container overflow-hidden"
          onMouseEnter={() => isHovered.current = true}
          onMouseLeave={() => isHovered.current = false}
        >
          <motion.div
            ref={containerRef}
            className="flex gap-8"
            animate={controls}
            style={{ width: 'max-content' }}
          >
            {duplicatedMembers.map((member, index) => (
              <motion.div
                key={index}
                className="team__card group flex-shrink-0 w-[350px]"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % teamMembers.length) * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -12 }}
              >
                <div className="image-wrapper">
                  <img 
                    src={member.image} 
                    alt={member.fullName}
                    className="team-image"
                  />
                  <div className="image-overlay" />
                </div>

                <div className="team-content">
                  <div>
                    <h3 className="team-name">{member.fullName}</h3>
                    <p className="team-title">{member.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;