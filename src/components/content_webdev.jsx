import React, { Component } from "react";
import { motion } from "framer-motion";
import Form from './form.jsx';
import { siteURL } from "./common/branding.jsx";


class WebDevContent extends Component {
  state = {};

  render() {



    return (

        <motion.div
        initial={{opacity: 0, scale: 0.7}}
        animate={{opacity: 1, scale: 1, transition:{delay: 0.4}}}
        exit={{opacity: 0, scale:0.7,  transition:{duration: 0.1, delay:0}}}
        
        >
        
        <div className="block1">
          <div className="Rtable Rtable--2cols Rtable--collapse">
            <div  className="Rtable-cell" style={{ order: "0", paddingLeft: "0px", paddingRight: "15px", display:"inline-block", width:"220px", maxWidth: "225px"}} >
                 <span style={{ padding:"0px", 
                           textAlign:"center", alignItems:"center", width:"205px"}}>
            <img src={siteURL+"/imgs/webdevBanner.png"}></img> 
              
              </span></div> 
              
              <div className="Rtable-cell" style={{ order: "1", paddingLeft:"0px", paddingTop: "15px", 
                                                     textWrap: "balance", margin: "auto", maxWidth: "870px"}}>
                <p className="introText" 
                  style={{fontSize: "15px", lineHeight: "120%"}}>
                

              React.js, Vite, Framer Motion, Node.js, Mongo, HTML, CSS, PHP, MySQL, jQuery, JavaScript, TypeScript, C, C++, Bash/csh Scripting, 
              JWT, PHP-PEAR, python, JSON, XML <br/> <span style={{ color: "#dcc"}}>Vintage: Pascal, ActionScript 2,3</span>
    
              
              </p>
            </div>
          </div>



<br/>
<p className="introText">I strive on <span style={{ fontFamily: "konnectBold", color: "#ddd", fontSize: "24px" }}>solving puzzles</span>. Whether it's trying to help someone find 
a great solution or solving the seemingly impossible task it's something I really enjoy doing. 
It all started when I went to computer coding camp at the age of 10 and never looked back.  
With quite a bit of freelance experience in the industry I've acquired a 
<span style={{ fontFamily: "konnectBold", color: "#ddd", fontSize: "24px" }}> unique skillset</span> with a knack for creative solutions.</p><br/>
          <p className="introText">

          <span style={{ fontFamily: "konnectBold", color: "#ddd", fontSize: "18px" }}>Software/Tools:</span> <br></br><span style={{ fontSize: "15px" }}>GIT, Adobe Photoshop, Apache Web Server, MySQL Server, phpMyAdmin, Microsoft Office, Open
Office, Logic, Pro Tools, Presonus Studio One, Reaper, Final Cut, Davinci Resolve, Adobe Premier, Visual Studio Code</span>

          </p>
          <br></br>
        </div>



        <div className="sectionHeader" style={{fontSize: "24px"}}>Featured Project</div>
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
                 <img style={{height: "45px", color: "#ffffff"}} src={siteURL+"/imgs/mymusic.svg"}  alt="My Musicianship"></img>
              </div>
            </h5>
          </div>
          <div
            style={{ order: "1", textAlign: "center" }}
            className="Rtable-cell"
          >
            <img className="pic" src={siteURL+"/imgs/mymusic.jpg"}/>

          </div>
          

          <div style={{ order: "0" }} className="Rtable-cell Rtable-cell--head">

              <div style={{ textAlign: "center", fontSize: "18px" }}></div>

          </div>
          <div
            
            className="Rtable-cell" style={{ order: "1", textAlign: "left", verticalAlign: "top", height: "100%"}}
          >
            <p className="section9" style = {{verticalAlign: "top"}}>
            <span style = {{fontWeight:"bold", color: "white"}} >About:</span> <br></br> My Musicianship is an adaptive online music education platform with curriculum, training, and assessments built in.
            <br/><br/>
            <span style = {{fontWeight:"bold", color: "white"}} >Challenge:</span> <br></br>I was tasked to provide a bulletproof RESTful API to handle 
            real time scoring and stat tracking of thousands of students for music education.  
            <br/><br/>
            
            <span style = {{fontWeight:"bold", color: "white"}} >Solution:</span> <br />I chose node.js and mongoDB developed with an extensive test suite to allow further changes with confident and rapid deployment even years after launch. There have been feature requests and 
            changes to the API requested afterwards and I am proud to say the API has proven to be rock solid for years.</p>
            <br />
            <br />
            <p></p>
          </div>
        </div>
        <br></br>
        <Form></Form>
        </motion.div>

    );
  }
}

export default WebDevContent;
