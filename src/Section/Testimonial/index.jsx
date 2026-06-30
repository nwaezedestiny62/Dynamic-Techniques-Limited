import React from 'react';
import "./Testimonial.css";
import { testimonials } from '../../data';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Testimonial = () => {
  return (
    <section id='testimonials' className="py-20 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-zinc-400 max-w-md mx-auto">
            Real stories from real people who transformed their business with us
          </p>
        </motion.div>

        <div className="testimonials__container">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              className="testimonials__card group"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: Math.min(index * 0.1, 0.4),
                ease: [0.23, 1, 0.32, 1]
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.4 }
              }}
            >
              <div className="card-inner">
                <div className="flex top">
                  <div className="profile">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>
                  
                  <div className="details">
                    <h4 className="text-white font-semibold text-xl">{item.name}</h4>
                    <div className="flex star__container">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bottom">
                  <FaQuoteLeft className="text-6xl text-primary/10 mb-4 transition-all group-hover:text-primary/20" />
                  <p className="muted">{item.review}</p>
                </div>

                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-3xl transition-all group-hover:bg-primary/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;