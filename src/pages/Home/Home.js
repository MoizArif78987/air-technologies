import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCode, FiUsers, FiTrendingUp, FiZap, FiLayers, FiSmartphone } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: <FiUsers />,
      title: "Beginner-Friendly Services",
      description: "Perfect for startups and non-tech founders looking to bring their ideas to life.",
      items: ["Tech Consultancy", "Feasibility Studies", "MVP Creation", "UI/UX Design"],
      color: "#667eea"
    },
    {
      icon: <FiCode />,
      title: "Development & Engineering",
      description: "Advanced technical solutions for scaling and modernizing your systems.",
      items: ["API Integrations", "System Rewrites", "CI/CD Setup", "Serverless Architecture"],
      color: "#764ba2"
    },
    {
      icon: <FiSmartphone />,
      title: "Product Development",
      description: "Full-stack development services for web, mobile, and desktop applications.",
      items: ["Mobile Apps", "Web Applications", "Progressive Web Apps", "Desktop Software"],
      color: "#f093fb"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="floating-elements">
            <div className="floating-element element-1"></div>
            <div className="floating-element element-2"></div>
            <div className="floating-element element-3"></div>
          </div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-text"
            >
              <h1>Transform Your Ideas Into
                <span className="gradient-text"> Digital Reality</span>
              </h1>
              <p className="hero-description">
                Air Technologies specializes in turning innovative concepts into 
                powerful software solutions. From startups to enterprises, we deliver cutting-edge 
                technology that drives growth and success.
              </p>
              
              <div className="hero-buttons">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/contact" className="btn-primary">
                    Get Free Consultation
                    <FiArrowRight className="btn-icon" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/services" className="btn-secondary">
                    Explore Services
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-visual"
            >
              <div className="hero-card">
                <div className="card-glow"></div>
                <div className="code-preview">
                  <div className="code-header">
                    <div className="code-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="code-content">
                    <div className="code-line">
                      <span className="code-keyword">const</span>
                      <span className="code-variable"> success</span>
                      <span className="code-operator"> = </span>
                      <span className="code-function">buildApp</span>
                      <span className="code-bracket">(</span>
                    </div>
                    <div className="code-line indent">
                      <span className="code-property">idea</span>
                      <span className="code-operator">: </span>
                      <span className="code-string">'innovative'</span>
                      <span className="code-operator">,</span>
                    </div>
                    <div className="code-line indent">
                      <span className="code-property">team</span>
                      <span className="code-operator">: </span>
                      <span className="code-string">'Air Technologies'</span>
                    </div>
                    <div className="code-line">
                      <span className="code-bracket">);</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="stat-item"
              >
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-preview section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <div className="section-header">
              <h2>Who We Are</h2>
              <p className="section-subtitle">
                Air Technologies is a forward-thinking technology partner 
                dedicated to transforming businesses through innovative software solutions.
              </p>
            </div>
            
            <div className="about-grid">
              <div className="about-text">
                <h3>Our Mission</h3>
                <p>
                  We bridge the gap between complex technology and business success. Our mission 
                  is to make cutting-edge software development accessible to everyone, from 
                  first-time entrepreneurs to established enterprises.
                </p>
                
                <div className="mission-points">
                  <div className="mission-point">
                    <FiZap className="mission-icon" />
                    <span>Rapid Development & Deployment</span>
                  </div>
                  <div className="mission-point">
                    <FiLayers className="mission-icon" />
                    <span>Scalable & Future-Proof Solutions</span>
                  </div>
                  <div className="mission-point">
                    <FiTrendingUp className="mission-icon" />
                    <span>Business Growth Focused</span>
                  </div>
                </div>
              </div>
              
              <div className="about-visual">
                <div className="tech-stack">
                  <div className="tech-item">
                    <span className="tech-logo">⚛️</span>
                    <span className="tech-name">React</span>
                  </div>
                  <div className="tech-item">
                    <span className="tech-logo">🟢</span>
                    <span className="tech-name">Node.js</span>
                  </div>
                  <div className="tech-item">
                    <span className="tech-logo">🐍</span>
                    <span className="tech-name">Python</span>
                  </div>
                  <div className="tech-item">
                    <span className="tech-logo">☁️</span>
                    <span className="tech-name">AWS</span>
                  </div>
                  <div className="tech-item">
                    <span className="tech-logo">🐳</span>
                    <span className="tech-name">Docker</span>
                  </div>
                  <div className="tech-item">
                    <span className="tech-logo">🍃</span>
                    <span className="tech-name">MongoDB</span>
                  </div>
                  <div className="tech-item">
                    <span className="tech-logo">📱</span>
                    <span className="tech-name">React Native</span>
                  </div>
                  <div className="tech-item">
                    <span className="tech-logo">🔷</span>
                    <span className="tech-name">.Net</span>
                  </div>
                  <div className="tech-item">
                    <span className="tech-logo">➕</span>
                    <span className="tech-name">Many More</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Our Services</h2>
            <p className="section-subtitle">
              We offer comprehensive software development services tailored to your needs, 
              whether you're just starting out or scaling your existing business.
            </p>
          </motion.div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="service-card"
              >
                <div className="service-icon" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-items">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
                <Link to="/services" className="service-link">
                  Learn More <FiArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Ready to Transform Your Business?</h2>
            <p>
              Let's discuss your project and explore how we can help you achieve your goals. 
              Get a free consultation and discover the possibilities.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;