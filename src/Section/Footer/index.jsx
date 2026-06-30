import React from 'react';
import "./Footer.css";
import Logo from '../../components/Logo';
import { footer, socialHandles } from '../../data';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer">
      <div className="overlay__div">
        <div className="footer-container">
          <div className="footer-grid">
            
            {/* Brand Column */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="footer-brand"
            >
              <Logo />
              
              <p className="footer-desc">
                Our mission is to build lasting spaces that inspire and uplift, 
                combining quality craftsmanship with innovative solutions to meet 
                the evolving needs of our clients and communities.
              </p>

              {/* Social Media */}
              <div className="social-links">
                {socialHandles.map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="social-icon"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Dynamic Links Columns */}
            {footer.map((section, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="footer-column"
              >
                <h4 className="footer-title">{section.title}</h4>
                
                <div className="footer-links">
                  {section.routes.map((route, idx) => (
                    <motion.a 
                      key={idx}
                      href={route.href} 
                      className="footer-link"
                      whileHover={{ x: 8 }}
                    >
                      {route.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>
                Copyright &copy; {new Date().getFullYear()} Dynamic Techniques Limited - 
                All rights reserved
              </p>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="back-to-top"
              >
                Back to Top
                <span className="back-icon">
                  <FaArrowUp />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;