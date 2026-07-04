import React, { useState } from 'react';
import './Gallery.css';
import { motion, AnimatePresence } from 'framer-motion';

// Import all gallery images from the assets barrel file
import {
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
  gallery7, gallery8, gallery9, gallery10, gallery11, gallery12,
  gallery13, gallery14, gallery15, gallery16, gallery17, gallery18,
  gallery19, gallery20
} from '../../assets';

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const allImages = [
    gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
    gallery7, gallery8, gallery9, gallery10, gallery11, gallery12,
    gallery13, gallery14, gallery15, gallery16, gallery17, gallery18,
    gallery19, gallery20
  ];

  const initialImages = allImages.slice(0, 6);
  const displayImages = showAll ? allImages : initialImages;

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        
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
            Explore our completed industrial electrical, automation, and power infrastructure projects
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          <AnimatePresence>
            {displayImages.map((imgSrc, index) => (
              <motion.div
                key={index}                    // Better key when using imported images
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <img 
                  src={imgSrc}
                  alt={`Industrial Project ${index + 1}`}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h3>Project {index + 1}</h3>
                    <p>Electrical & Automation Excellence</p>
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