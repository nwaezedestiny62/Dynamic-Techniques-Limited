import React, { useState } from 'react';
import './Gallery.css';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const allImages = [
    'gallery1.jpg', 'gallery2.jpg', 'gallery3.jpg', 'gallery4.jpg',
    'gallery5.jpg', 'gallery6.jpg', 'gallery7.jpg', 'gallery8.jpg',
    'gallery9.jpg', 'gallery10.jpg', 'gallery11.jpg', 'gallery12.jpg',
    'gallery13.jpg', 'gallery14.jpg', 'gallery15.jpg', 'gallery16.jpg',
    'gallery17.jpg', 'gallery18.jpg', 'gallery19.jpg', 'gallery20.jpg'
  ];

  const initialImages = allImages.slice(0, 6);
  const displayImages = showAll ? allImages : initialImages;

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        
        {/* Header with more top space */}
        <div className="gallery-header">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gallery-title"
          >
            Our <span className="highlight">Projects</span>
          </motion.h2>
          <p className="gallery-subtitle">
            Explore some of our finest architectural masterpieces and construction works
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          <AnimatePresence>
            {displayImages.map((img, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <img 
                  src={`/assets/${img}`} 
                  alt={`Project ${index + 1}`}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h3>Project {index + 1}</h3>
                    <p>Architectural Excellence</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See More Button */}
        <div className="gallery-button-container">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="see-more-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? "Show Less" : "See More Projects"}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;