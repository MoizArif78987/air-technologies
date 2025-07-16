import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showMainApp, setShowMainApp] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowMainApp(true);
    }, 300);
  };

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {showMainApp && (
          <motion.div
            className="main-app"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Router>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;