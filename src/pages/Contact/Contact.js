import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, FiPhone, FiMapPin, FiClock, FiSend, 
  FiUser, FiMessageSquare, FiCheck, FiArrowRight
} from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
        timeline: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email Us',
      info: 'info@airtechnologies.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <FiPhone />,
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: <FiMapPin />,
      title: 'Visit Us',
      info: 'San Francisco, CA',
      description: 'Come say hello at our office'
    },
    {
      icon: <FiClock />,
      title: 'Working Hours',
      info: '9:00 AM - 6:00 PM',
      description: 'Monday to Friday'
    }
  ];

  const services = [
    'Tech Consultancy',
    'MVP Development',
    'Web Application',
    'Mobile App Development',
    'UI/UX Design',
    'API Integration',
    'System Rewrite',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000'
  ];

  const timelines = [
    'ASAP',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Just exploring'
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. Simple MVPs can take 4-8 weeks, while complex applications may take 3-6 months. We provide detailed timelines during our consultation.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer comprehensive support packages including bug fixes, updates, hosting management, and feature enhancements to ensure your application continues to perform optimally.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We specialize in modern technologies including React, Node.js, Python, React Native, AWS, and more. We choose the best tech stack based on your specific requirements.'
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We can integrate seamlessly with your existing development team, provide consulting services, or take full ownership of your project - whatever works best for you.'
    }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1>Let's Build Something Amazing Together</h1>
            <p className="hero-description">
              Ready to transform your ideas into reality? Get in touch with us for a free consultation 
              and let's discuss how we can help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="contact-info-card"
              >
                <div className="info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <p className="info-main">{info.info}</p>
                <p className="info-description">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="form-container"
            >
              <h2>Start Your Project</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">
                        <FiUser /> Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">
                        <FiMail /> Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">
                        <FiPhone /> Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="service">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="budget">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="timeline">
                      <FiClock /> Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="">When do you need this completed?</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">
                      <FiMessageSquare /> Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="submit-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiSend /> Send Message
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="success-message"
                >
                  <FiCheck className="success-icon" />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </motion.div>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="contact-sidebar"
            >
              <div className="sidebar-card">
                <h3>Why Choose Air Technologies?</h3>
                <ul className="benefits-list">
                  <li>
                    <FiCheck className="check-icon" />
                    Free initial consultation
                  </li>
                  <li>
                    <FiCheck className="check-icon" />
                    Transparent pricing
                  </li>
                  <li>
                    <FiCheck className="check-icon" />
                    Agile development process
                  </li>
                  <li>
                    <FiCheck className="check-icon" />
                    24/7 support available
                  </li>
                  <li>
                    <FiCheck className="check-icon" />
                    Money-back guarantee
                  </li>
                </ul>
              </div>
              
              <div className="sidebar-card">
                <h3>What Happens Next?</h3>
                <div className="process-steps">
                  <div className="process-step">
                    <span className="step-number">1</span>
                    <div>
                      <h4>Initial Consultation</h4>
                      <p>We'll discuss your project requirements and goals</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <span className="step-number">2</span>
                    <div>
                      <h4>Proposal & Planning</h4>
                      <p>Receive a detailed proposal with timeline and costs</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <span className="step-number">3</span>
                    <div>
                      <h4>Development Begins</h4>
                      <p>We start building your solution with regular updates</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Frequently Asked Questions</h2>
            <p>Get answers to common questions about our services and process.</p>
          </motion.div>
          
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="faq-item"
              >
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Ready to Get Started?</h2>
            <p>
              Don't wait any longer. Let's turn your ideas into reality. 
              Contact us today for a free consultation.
            </p>
            <motion.a
              href="mailto:info@airtechnologies.com"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Email Us Directly <FiArrowRight />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;