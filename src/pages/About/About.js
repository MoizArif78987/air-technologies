import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiTarget, FiEye, FiHeart, FiUsers, FiAward, FiTrendingUp,
  FiCode, FiGlobe, FiZap, FiShield, FiClock, FiThumbsUp
} from 'react-icons/fi';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <FiTarget />,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.'
    },
    {
      icon: <FiUsers />,
      title: 'Client-Centric Approach',
      description: 'Your success is our success. We work closely with you to understand your needs and deliver solutions that exceed expectations.'
    },
    {
      icon: <FiShield />,
      title: 'Quality & Security',
      description: 'We follow industry best practices and security standards to ensure your applications are robust, secure, and reliable.'
    },
    {
      icon: <FiClock />,
      title: 'Timely Delivery',
      description: 'We respect your time and deadlines. Our agile development process ensures projects are delivered on time and within budget.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: <FiCode /> },
    { number: '25+', label: 'Happy Clients', icon: <FiThumbsUp /> },
    { number: '3+', label: 'Years Experience', icon: <FiAward /> },
    { number: '99%', label: 'Client Satisfaction', icon: <FiHeart /> }
  ];

  const technologies = [
    { name: 'React.js', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'Firebase', category: 'Backend' }
  ];

  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Lead Full-Stack Developer',
      expertise: 'React, Node.js, AWS',
      description: 'Passionate about creating scalable web applications with modern technologies.'
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      expertise: 'Design Systems, Prototyping',
      description: 'Focused on creating intuitive and beautiful user experiences that drive engagement.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Mobile App Developer',
      expertise: 'React Native, Flutter',
      description: 'Specializes in cross-platform mobile development and native app optimization.'
    },
    {
      name: 'Emily Davis',
      role: 'DevOps Engineer',
      expertise: 'CI/CD, Cloud Infrastructure',
      description: 'Ensures smooth deployment and scalable infrastructure for all our projects.'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1>About AO Technologies</h1>
            <p className="hero-description">
              We are a passionate team of developers, designers, and innovators 
              dedicated to transforming businesses through cutting-edge software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section">
        <div className="container">
          <div className="mission-vision-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mission-card"
            >
              <div className="card-icon">
                <FiTarget />
              </div>
              <h2>Our Mission</h2>
              <p>
                To democratize technology by making advanced software development 
                accessible to businesses of all sizes. We bridge the gap between 
                complex technical solutions and real business needs, ensuring every 
                client can leverage the power of modern technology to achieve their goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="vision-card"
            >
              <div className="card-icon">
                <FiEye />
              </div>
              <h2>Our Vision</h2>
              <p>
                To become the leading software development partner for innovative 
                businesses worldwide. We envision a future where every great idea 
                can be transformed into a successful digital product, regardless of 
                technical complexity or budget constraints.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Our Impact</h2>
            <p>Numbers that reflect our commitment to excellence and client success.</p>
          </motion.div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="stat-card"
              >
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do and every decision we make.</p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="value-card"
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Technologies We Master</h2>
            <p>We stay current with the latest technologies to deliver cutting-edge solutions.</p>
          </motion.div>

          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="tech-item"
              >
                <span className="tech-name">{tech.name}</span>
                <span className="tech-category">{tech.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Meet Our Team</h2>
            <p>Talented professionals dedicated to bringing your vision to life.</p>
          </motion.div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="team-card"
              >
                <div className="member-avatar">
                  <div className="avatar-placeholder">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-expertise">{member.expertise}</p>
                  <p className="member-description">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="why-content"
          >
            <div className="why-text">
              <h2>Why Choose AO Technologies?</h2>
              <div className="why-points">
                <div className="why-point">
                  <FiZap className="why-icon" />
                  <div>
                    <h4>Rapid Development</h4>
                    <p>We use agile methodologies and modern tools to deliver projects faster without compromising quality.</p>
                  </div>
                </div>
                <div className="why-point">
                  <FiGlobe className="why-icon" />
                  <div>
                    <h4>Global Perspective</h4>
                    <p>Our solutions are designed to scale globally, considering international standards and best practices.</p>
                  </div>
                </div>
                <div className="why-point">
                  <FiTrendingUp className="why-icon" />
                  <div>
                    <h4>Growth-Focused</h4>
                    <p>We build solutions that grow with your business, ensuring long-term success and scalability.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="why-visual">
              <div className="floating-card">
                <h4>Our Approach</h4>
                <ul>
                  <li>✓ Understand your business goals</li>
                  <li>✓ Design scalable solutions</li>
                  <li>✓ Implement with best practices</li>
                  <li>✓ Provide ongoing support</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Ready to Work Together?</h2>
            <p>
              Let's discuss your project and see how our expertise can help 
              transform your ideas into successful digital solutions.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link to="/services" className="btn-secondary">
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;