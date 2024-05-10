import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
function Navbar() {
  return (
    <div className="navbar">
    
        <Sidebar />
  
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sagar Dev
        </motion.span>

        <div className="likes">
          <div className="social-icons">
            <a href="#">
              <img src="/facebook.png" alt="social_facebook" />
            </a>
            <a href="#">
              <img src="/instagram.png" alt="social_instagram" />
            </a>
            <a href="#">
              <img src="/youtube.png" alt="social_youtube" />
            </a>
            <a href="#">
              <img src="/dribbble.png" alt="social_dribble" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
