import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import loadingVideo from '../../assets/loading_screen.mp4';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
    setTimeout(() => {
      setShowLoading(false);
      onLoadingComplete();
    }, 500);
  };

  return (
    <AnimatePresence>
      {showLoading && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="loading-video-container">
            <video
              className="loading-video"
              autoPlay
              muted
              onEnded={handleVideoEnd}
              playsInline
            >
              <source src={loadingVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {isVideoEnded && (
            <motion.div
              className="loading-complete"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="loading-text">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0, duration: 0.3 }}
                >
                  Welcome to AO Technologies
                </motion.h2>
                <motion.div
                  className="loading-bar"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;