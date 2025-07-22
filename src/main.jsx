import React from 'react'
import ReactDOM from 'react-dom/client'
import AnimatedRoutes from './components/animateRoutes.jsx'
import { useLocation, BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";

import { siteName } from './components/common/branding.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode> <BrowserRouter >
    
    <div id="content-wrap" >
    
      <AnimatedRoutes /> 
    
      </div>
    
      <div className="footer">
        <div className="copyright"> 
          <hr />
          &copy;2025 {siteName} <a target="_blank" href="humans.txt"  rel="noopener noreferrer">created by yours truly.</a>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
)
