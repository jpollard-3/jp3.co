import React, { Component } from "react";
import { motion } from "framer-motion";
import Form from './form.jsx'
import { siteURL } from "./common/branding.jsx";



class MediaContent extends Component {
  state = {};

  render() {


    return (

        <motion.div
        initial={{opacity: 0, scale: 0.7}}
        animate={{opacity: 1, scale: 1, transition:{delay: 0.4}}}
        exit={{opacity: 0, scale:0.7,  transition:{duration: 0.1, delay:0}}}
        
        >
        
        <div className="block1">
        
        <p><span style={{ fontFamily: "konnectBold", color: "#eee", fontSize: "22px"}}>Hello</span>, my name is</p>{" "}
          <h5 className="introName">John.</h5>
          <h5 style={{ fontFamily: "konnectBold", color: "white" }}>
            I create solutions.
          </h5>{" "}
          <p className="introText">
            

          I'm a freelance professional equipped with a diverse skill set. 
          From full-stack web development to audio production or fine-tuning your latest YouTube masterpiece, 
          I've got the expertise to bring your vision to life. Let's collaborate and elevate your projects to new heights.

           
          </p>
          <br></br>
        </div>
        <div className="sectionHeader">How can I help?</div>
        <br></br>
        <div className="Rtable Rtable--2cols Rtable--collapse">
          <div style={{ order: "0" }} className="Rtable-cell Rtable-cell--head">
            <h5>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "22px",
                }}
              >
                Web+Dev &lt; /&gt;
              </div>
            </h5>
          </div>
          <div
            style={{ order: "1", textAlign: "center" }}
            className="Rtable-cell"
          >
        <video autoPlay muted playsInline loop 
          className="pic" 
          src="./imgs/webdev1.mp4" 
          type="video/mp4" >
            <p> autoPlay Sorry, Your Browser Doesn't Support Embedded Videos. </p>
        </video>

          </div>
          <div style={{ order: "2" }} className="Rtable-cell">
            <p className="section9">
              
              Elevate your online presence with expert web programming skills. From 
              dynamic React interfaces to robust Node.js backends, and from efficient 
              MongoDB databases to versatile PHP solutions, I've got you covered. 
              With a mastery of MySQL and a commitment to cutting-edge technologies, 
              I can craft custom solutions tailored to your specific needs. <br /><br />Let's build something remarkable together.
            </p>
            <br></br>
          </div>

          <div style={{ order: "0" }} className="Rtable-cell Rtable-cell--head">
            <h5>
              <div style={{ textAlign: "center", fontSize: "22px" }}>Media</div>
            </h5>
          </div>
          <div
            style={{ order: "1", zIndex:"40", textAlign: "center" }}
            className="Rtable-cell" 
          >
             
             <H5AudioPlayer
  src={siteURL+"/media/Epilogue.mp3"}
   volume="0.5" header="Epilogue" showJumpControls={false} layout="stacked" 
   
/>
    
          </div>
          <div style={{ order: "2" }} className="Rtable-cell">
            <p className="section9">
            
            </p>
            <br />
            <br />
            <p></p>
          </div>
        </div>
        <Form></Form>
        </motion.div>

    );
  }
}

export default MediaContent;
