import React from 'react';
import "./Contact.css";
import { motion } from 'framer-motion';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';

const contactInfo = [
  {
    icon: <MdOutlineAlternateEmail />,
    title: "Email us",
    subtitle: "Fast & Reliable Support",
    detail: "nwaezedestiny62@gmail.com",
    link: "mailto:nwaezedestiny62@gmail.com"
  },
  {
    icon: <FaLocationCrosshairs />,
    title: "Our Address",
    subtitle: "Come visit us in our office",
    detail: "Peace Estate, Magboro, Ogun State, Nigeria"
  },
  {
    icon: <FiPhoneCall />,
    title: "Phone number",
    subtitle: "Give us a call",
    detail: "+234 701 093 0763",
    link: "tel:+2347010930763"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/70" /> {/* Dark overlay */}

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-bold leading-tight mb-6"
              >
                Let's <span className="text-orange-500">Connect</span>
              </motion.h2>
              <p className="text-xl text-orange-100/80 max-w-md">
                Ready to bring your vision to life? We're just one message away.
              </p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ x: 12 }}
                  className="contact__info group"
                >
                  <div className="flex items-start gap-6">
                    <motion.div 
                      className="flex__center icon"
                      whileHover={{ scale: 1.15, rotate: 12 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {info.icon}
                    </motion.div>

                    <div className="details flex-1">
                      <h4 className="text-2xl font-semibold mb-1">{info.title}</h4>
                      <p className="muted text-orange-100/70 mb-2">{info.subtitle}</p>
                      {info.link ? (
                        <a href={info.link} className="text-orange-400 hover:text-orange-300 transition-colors text-lg">
                          {info.detail}
                        </a>
                      ) : (
                        <p className="text-lg text-white/90">{info.detail}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="form-container"
          >
            <div className="form">
              <div className="form__top">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="sub-heading"
                >
                  Get in Touch
                </motion.h3>
                <p className="muted">
                  Have a project in mind? We're excited to hear from you.
                </p>
              </div>

              <div className="form__middle">
                <motion.input 
                  whileFocus={{ scale: 1.02 }}
                  type="text" 
                  placeholder="Full name" 
                  name="fullName" 
                  className="control" 
                />
                <motion.input 
                  whileFocus={{ scale: 1.02 }}
                  type="email" 
                  placeholder="Email address" 
                  name="email" 
                  className="control" 
                />
                <motion.input 
                  whileFocus={{ scale: 1.02 }}
                  type="tel" 
                  placeholder="Phone number" 
                  name="phoneNumber" 
                  className="control" 
                />
                <motion.textarea 
                  whileFocus={{ scale: 1.02 }}
                  name="message" 
                  placeholder="Your message" 
                  className="control"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn primary w-full py-4 text-lg font-semibold mt-4"
              >
                Send Message
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;