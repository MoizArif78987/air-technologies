import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiUsers, FiCode, FiSmartphone, FiSun, FiTrendingUp, 
  FiLayers, FiZap, FiSettings, FiGlobe, FiMonitor, FiArrowRight 
} from 'react-icons/fi';
import './Services.css';

const Services = () => {
  const serviceCategories = [
    {
      id: 'beginner',
      icon: <FiUsers />,
      title: 'Beginner-Friendly Services',
      subtitle: 'Perfect for Startups & Non-Tech Founders',
      description: 'We understand that not everyone speaks tech. Our beginner-friendly services are designed to guide you through every step of your digital journey, from initial concept to market-ready product.',
      color: '#667eea',
      services: [
        {
          icon: <FiSun />,
          name: 'Tech Consultancy',
          description: 'Get expert guidance on choosing the right technology stack and approach for your business needs. We help you make informed decisions without the technical jargon.',
          features: ['Technology Stack Recommendations', 'Project Roadmap Planning', 'Budget & Timeline Estimation', 'Risk Assessment']
        },
        {
          icon: <FiTrendingUp />,
          name: 'Feasibility Studies',
          description: 'Before investing time and money, let us analyze whether your project idea is technically and financially viable in the current market.',
          features: ['Market Analysis', 'Technical Feasibility Assessment', 'Cost-Benefit Analysis', 'Competitive Research']
        },
        {
          icon: <FiZap />,
          name: 'MVP Creation',
          description: 'Build the first lean version of your product to test your idea in the market quickly and cost-effectively.',
          features: ['Core Feature Development', 'User Testing Setup', 'Market Validation', 'Iterative Improvements']
        },
        {
          icon: <FiLayers />,
          name: 'Wireframing & UI/UX Design',
          description: 'Create intuitive and beautiful user interfaces that provide exceptional user experiences and drive engagement.',
          features: ['User Journey Mapping', 'Interactive Prototypes', 'Visual Design Systems', 'Usability Testing']
        }
      ]
    },
    {
      id: 'development',
      icon: <FiCode />,
      title: 'Development & Engineering Services',
      subtitle: 'Advanced Technical Solutions',
      description: 'For businesses ready to scale or modernize their existing systems, we offer advanced development and engineering services that ensure your technology grows with your business.',
      color: '#764ba2',
      services: [
        {
          icon: <FiSettings />,
          name: 'API Integrations',
          description: 'Seamlessly connect your applications with third-party services like payment gateways, analytics tools, maps, and more.',
          features: ['Payment Gateway Integration', 'Social Media APIs', 'Analytics & Tracking', 'Custom API Development']
        },
        {
          icon: <FiLayers />,
          name: 'Rewrites to Newer Versions',
          description: 'Modernize your legacy systems by upgrading to newer frameworks and architectures for better performance and maintainability.',
          features: ['Legacy System Analysis', 'Migration Planning', 'Data Migration', 'Performance Optimization']
        },
        {
          icon: <FiZap />,
          name: 'CI/CD Setup',
          description: 'Implement continuous integration and delivery pipelines for automated testing, building, and deployment of your applications.',
          features: ['Automated Testing', 'Build Automation', 'Deployment Pipelines', 'Quality Assurance']
        },
        {
          icon: <FiGlobe />,
          name: 'Serverless Architecture',
          description: 'Design and implement scalable, cost-effective serverless solutions using modern cloud technologies.',
          features: ['AWS Lambda Functions', 'Azure Functions', 'Auto-scaling Solutions', 'Cost Optimization']
        }
      ]
    },
    {
      id: 'product',
      icon: <FiSmartphone />,
      title: 'Product Development Services',
      subtitle: 'Full-Stack Development Solutions',
      description: 'From mobile apps to desktop software, we build complete digital products that deliver exceptional user experiences across all platforms.',
      color: '#f093fb',
      services: [
        {
          icon: <FiSmartphone />,
          name: 'Mobile App Development',
          description: 'Create native and hybrid mobile applications for Android and iOS that provide seamless user experiences.',
          features: ['Native iOS & Android Apps', 'Cross-platform Solutions', 'App Store Optimization', 'Push Notifications']
        },
        {
          icon: <FiGlobe />,
          name: 'Web Application Development',
          description: 'Build modern, responsive web applications using cutting-edge technologies and frameworks.',
          features: ['React & Vue.js Development', 'Node.js Backend', 'Database Design', 'Cloud Deployment']
        },
        {
          icon: <FiZap />,
          name: 'Progressive Web Apps (PWAs)',
          description: 'Develop web applications that work offline, install like native apps, and offer lightning-fast performance.',
          features: ['Offline Functionality', 'App-like Experience', 'Fast Loading', 'Cross-platform Compatibility']
        },
        {
          icon: <FiMonitor />,
          name: 'Desktop Application Development',
          description: 'Build powerful desktop software for Windows, macOS, and Linux using modern cross-platform technologies.',
          features: ['Cross-platform Development', 'Native Performance', 'System Integration', 'Auto-updates']
        }
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and technical requirements.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes, mockups, and interactive prototypes to visualize your solution.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build your solution using best practices, with continuous testing and quality assurance.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Launch your product and provide ongoing support, maintenance, and updates.'
    }
  ];

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1>Our Services</h1>
            <p className="hero-description">
              From initial concept to market-ready product, we offer comprehensive 
              software development services tailored to your specific needs and business goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={category.id} id={category.id} className="service-category">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="category-header"
            >
              <div className="category-icon" style={{ color: category.color }}>
                {category.icon}
              </div>
              <h2>{category.title}</h2>
              <p className="category-subtitle">{category.subtitle}</p>
              <p className="category-description">{category.description}</p>
            </motion.div>

            <div className="services-grid">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="service-card"
                >
                  <div className="service-header">
                    <div className="service-icon" style={{ color: category.color }}>
                      {service.icon}
                    </div>
                    <h3>{service.name}</h3>
                  </div>
                  
                  <p className="service-description">{service.description}</p>
                  
                  <ul className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="service-cta">
                    Get Started <FiArrowRight />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Our Development Process</h2>
            <p className="section-subtitle">
              We follow a proven methodology to ensure your project is delivered 
              on time, within budget, and exceeds your expectations.
            </p>
          </motion.div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="process-step"
              >
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's discuss your requirements and create a custom solution 
              that perfectly fits your business needs and budget.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">
                Get Free Consultation
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn About Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;