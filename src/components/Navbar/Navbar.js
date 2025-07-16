import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Beginner-Friendly Services', path: '/services#beginner' },
        { name: 'Development & Engineering', path: '/services#development' },
        { name: 'Product Development', path: '/services#product' }
      ]
    },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="logo-text">AO</span>
            <span className="logo-accent">Technologies</span>
          </motion.div>
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <div key={index} className="nav-item-wrapper">
              {item.hasDropdown ? (
                <div 
                  className="nav-item dropdown"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link 
                    to={item.path} 
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {item.name}
                    <FiChevronDown className="dropdown-icon" />
                  </Link>
                  
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div 
                        className="dropdown-menu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.dropdownItems.map((dropItem, dropIndex) => (
                          <Link 
                            key={dropIndex}
                            to={dropItem.path} 
                            className="dropdown-link"
                            onClick={closeMenu}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="nav-item">
                  <Link 
                    to={item.path} 
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </div>
              )}
            </div>
          ))}
          
          <motion.div 
            className="nav-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" className="btn-primary" onClick={closeMenu}>
              Get Free Consultation
            </Link>
          </motion.div>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;