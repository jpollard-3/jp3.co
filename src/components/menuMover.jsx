import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { motion} from "framer-motion";
import { Link } from "react-router-dom";
import { siteName } from "./common/branding";

export default function MenuMover(props) {
  const [menuState, setMenuState] = useState(false);
 
  const menu = React.createRef();
  const {
    onNav,
    className,
    handleSmalls,
    handleBurger,
    brandingClass,
    windowWidth,
    scroll,
  } = props;

  useEffect(() => {
    // gsap.to(header.current, { color: "#8c0", duration: 2 });
    if (
      className === "topnav responsive" &&
      windowWidth <= 600 &&
      menuState === false
    ) {
      //   gsap.to(header.current, { y: -100, duration: 0 });

      gsap.set(menu.current, { display: "block", duration: 0 });
      gsap.to(menu.current, { alpha: 0, duration: 0 });
      gsap.to(menu.current, {
        startAt: { alpha: 0, y: -150 },
        alpha: 1,
        y: 0,
        duration: 0.3,
      });
      setMenuState(true);
    } else {
      /* gsap.to(menu.current, { alpha: 1, duration: 0, zIndex: 3 }); */

      if (windowWidth <= 600 && className === "topnav") {
        setMenuState(false);
        gsap.set(menu.current, { display: "none", duration: 0 });
      } else {
        if (windowWidth <= 600) {
          gsap.set(menu.current, { display: "none", duration: 0 });
        }
        gsap.set(menu.current, { display: "block", duration: 0 });
      }
    }
  }, [menu, className, menuState, windowWidth]);

  const scrollClass = scroll ? " scrolled" : "";


  let bc = brandingClass;
  if (className === "topnav responsive") {
    bc = "branding topbar";
  }
  bc += scrollClass;


  return (
    <>
      {windowWidth > 600 ? <div className={bc}>{siteName}</div> : ""}
      <div className={className} id="Topnav">
        <a href="#top" className="icon" onClick={handleBurger}>
          &#9776;
        </a>
        {windowWidth > 600 ? "" : <div className={bc}>{siteName}</div>}
        <div className="links" ref={menu} onMouseLeave={handleSmalls}>
        
          <Link to="/"  onClick={() => {
             
              onNav(1);
              handleSmalls();
            }}><motion.div 
            whileHover={{ scale: 1.2, color: "#ffffff" }}
            transition={{ type: "spring", stiffness: 1000, damping: 18 }}
           
          >HOME</motion.div></Link>

        <Link to="/webdev" onClick={() => {
              onNav(2);
              handleSmalls();
            }}>
          <motion.div 
            whileHover={{ scale: 1.2, color: "#ffffff" }}
            transition={{ type: "spring", stiffness: 1000, damping: 18 }}
            onClick={() => {
              onNav(5);
              handleSmalls();
            }}
          >
            WEBDEV
          </motion.div></Link>

          <Link to="/about" onClick={() => {
              onNav(4);
              handleSmalls();
            }}>
            <motion.div
            whileHover={{ scale: 1.2, color: "#ffffff" }}
            transition={{ type: "spring", stiffness: 1000, damping: 18 }} >
          
            ABOUT ME
          </motion.div></Link>
          
            
        </div>
      </div>
    </>
  );
}
