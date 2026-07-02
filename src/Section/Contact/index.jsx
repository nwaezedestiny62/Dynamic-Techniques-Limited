import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';
import "./Contact.css"

const contactInfo = [
  {
    icon: <MdOutlineAlternateEmail />,
    title: "Email us",
    subtitle: "Fast & Reliable Support",
    detail: "info@dynamictechniquesltd.com",
    link: "mailto:info@dynamictechniquesltd.com"
  },
  {
    icon: <FaLocationCrosshairs />,
    title: "Our Address",
    subtitle: "Visit or reach our office",
    detail: "14, Kudirat Abiola Way, Olusosun Bus Stop, Oregun, Ikeja, Lagos"
  },
  {
    icon: <FiPhoneCall />,
    title: "Phone number",
    subtitle: "Call us directly",
    detail: "+234 812 271 3516",
    link: "tel:+2348122713516"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phoneNumber: '', message: ''
  });

  const [status, setStatus] = useState({ submitted: false, success: false, message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: "068b2951-bedc-46fb-87ee-500635a1379f",
          name: formData.fullName,
          email: formData.email,
          phone: formData.phoneNumber,
          message: formData.message,
          subject: "New Project Inquiry - Dynamic Techniques Limited",
          from_name: "Dynamic Techniques Website"
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ submitted: true, success: true, message: "Thank you! Your message has been sent successfully. We'll get back to you soon." });
        setFormData({ fullName: '', email: '', phoneNumber: '', message: '' });
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      setStatus({ submitted: true, success: false, message: "Failed to send message. Please try again or call us directly." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="overlay" />

      <div className="container">
        <div className="grid">
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="main-heading"
              >
                Let's <span>Build Together</span>
              </motion.h2>
              <p className="intro-text">
                Ready to power your next industrial, electrical, or automation project? 
                Our expert team is ready to deliver excellence.
              </p>
            </div>

            <div className="contact-list">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ x: 12 }}
                  className="contact__info"
                >
                  <div className="contact-item">
                    <motion.div className="icon" whileHover={{ scale: 1.12, rotate: 8 }}>
                      {info.icon}
                    </motion.div>

                    <div className="details">
                      <h4>{info.title}</h4>
                      <p className="subtitle">{info.subtitle}</p>
                      {info.link ? (
                        <a href={info.link} className="link">{info.detail}</a>
                      ) : (
                        <p className="detail-text">{info.detail}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="form-container"
          >
            <motion.h3 className="sub-heading">Get in Touch</motion.h3>
            
            <p className="form-description">
              Have a project in mind? Share the details and let's create something powerful.
            </p>

            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full name" name="fullName" value={formData.fullName} onChange={handleChange} required className="control" />
              <input type="email" placeholder="Email address" name="email" value={formData.email} onChange={handleChange} required className="control" />
              <input type="tel" placeholder="Phone number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="control" />
              <textarea 
                name="message" 
                placeholder="Tell us about your project (Electrical Installation, Automation Upgrade, Power System, etc.)" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                className="control"
              />

              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="btn primary"
              >
                {loading ? "Sending Message..." : "Send Message"}
              </motion.button>
            </form>

            {status.submitted && (
              <div className={`status-message ${status.success ? 'success' : 'error'}`}>
                {status.message}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;