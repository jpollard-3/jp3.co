import { useLocation, BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";
import Content from './content.jsx'
import MediaContent from './content_media.jsx'
import WebDevContent from './content_webdev.jsx';
import AboutContent from './content_about.jsx';
import App from '../App.jsx'

function AnimatedRoutes () {


   const location = useLocation();
   
   return (
    <>

<Routes location={useLocation()} key={location.pathname} >
      <Route path="/" element={<><App loc={location}/></>} />
      <Route path="/webdev" element={<><App loc={location}/>  </>} />
      <Route path="/media"  element ={<><App loc={location}/></>}/>
      <Route path="/hireme" element={<App loc={location}/>} />
      <Route path="/about" element={<App loc={location}/>} />
    </ Routes>
    
    <AnimatePresence 
      initial={true}
      mode="wait"
      onExitComplete={() => {
            if (typeof window !== "undefined") {
                window.scrollTo({ top: 0, behavior: "instant" });
            }
        }}
    >
    

    <Routes location={useLocation()} key={location.pathname} >
      <Route path="/" element={<><Content /> </>} />
      <Route path="/webdev" element={<><WebDevContent /></>} />
      <Route path="/media"  element ={<><MediaContent /></>}/>
      <Route path="/hireme" element={<Content />} />
      <Route path="/about" element={<AboutContent />} />
    </ Routes>
    </AnimatePresence></>

     );
}

export default AnimatedRoutes;