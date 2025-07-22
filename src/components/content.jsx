import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Form from './form.jsx'

import { siteURL } from "./common/branding";

class Content extends Component {
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
          ><Link to="/webdev" ></Link>
         
   
        <video autoPlay muted playsInline loop 
          className="pic" 
          src={siteURL+"/imgs/webdev_clip.mp4"}
          type="video/mp4" >
            <p> Sorry, Your Browser Doesn't Support Embedded Videos. </p>
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
              <div style={{ textAlign: "center", fontSize: "22px" }}>Media<Link to="/media" style={{ textDecoration:"none"}} ></Link></div>
            </h5>
          </div>
          <div
            style={{ order: "1", textAlign: "center" }}
            className="Rtable-cell"
          >
             <Link to="/media" ></Link><video autoPlay muted playsInline loop className="pic">
            <source src={siteURL+"/imgs/media_clip.mp4"} type="video/mp4" />
            <p> Sorry, Your Browser Doesn't Support Embedded Videos. </p>
        </video>
    
          </div>
          <div style={{ order: "2" }} className="Rtable-cell">
            <p className="section9">
            Unlock the full potential of your content with my media services. 
            Whether it's polishing your podcast, refining your YouTube videos, or enhancing your promotional 
            materials, my editing is here to elevate your projects to the next level. 
            From crisp audio adjustments to seamless visual transitions, you can trust me to deliver professional 
            results tailored to your unique needs. Let's collaborate and bring your vision to life today.
            </p>
            <br />
            <br />
            <p></p>
          </div>
        </div>
        <Form />
        </motion.div>

    );
  }
}

export default Content;
