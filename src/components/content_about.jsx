import React, { Component } from "react";
import { motion } from "framer-motion";
import Form from './form.jsx'
import { siteURL } from "./common/branding.jsx";



class AboutContent extends Component {
  state = {};

  render() {


    //#1f242f
    //#1D2433
    //#12151f


    return (

        <motion.div
        initial={{opacity: 0, scale: 0.7}}
        animate={{opacity: 1, scale: 1, transition:{delay: 0.4}}}
        exit={{opacity: 0, scale:0.7,  transition:{duration: 0.1, delay:0}}}
        
        >
        
        <div className="block1" style={{backgroundColor: "#1f242f"}} >


        <div className="mx-auto w-full flex flex-col md:flex-row md:py-3 md:mt-2 items-center content-center justify-center">
        <div className="shdw px-12 py-3"><div className="flex justify-center items-center" style={{background:"#334", width:"208px", height:"208px", clipPath:"circle(47%)"}}><img className=" w-52 p-0 pt-6" style={{ clipPath:"circle(50%  at 104px 104px)"}} src="https://jp3.co/imgs/3.PNG" ></img>
            </div></div>
   <div className="basis-1/2 py-6" style={{paddingTop: ".5rem", paddingBottom: "1.5rem"}}>
                <p className="introText" style={{fontSize: "15px", lineHeight: "120%"}}>

                        <span style={{ fontFamily: "konnectBold", color: "#eee", fontSize: "36px"}}>John Pollard III</span>
                        <br></br>
                        <span style={{fontFamily: "konnectBold", color: "#bbc", fontSize: "17.7px",paddingLeft: "0px", paddingTop:"0fpx"}}>Developer. Musician. Traveler. </span>

 
           
                </p> 
                <br />
                <p className="introCaptionText" style={{lineHeight: "1.1", textAlign: "left", fontSize: "17px"}}>
            

                    A motivated individual with in-depth knowledge of devlopment process, languages, and tools, seeking a position in a growth-oriented company where I can use my skills and creativity to propel the company with the scope to further develop my skills and learn new ones as well.
                   
                <br></br>
                </p>
  
            
  </div>
</div>



          <p className="introText" style={{lineHeight: "1.2", textAlign: "left", fontSize:"18px", color:"#ddd", padding: "0px 0px"}}>
            
                    I'm a Texas based freelancer with a unique set of skills. I have 20+ years of professional experience making custom projects/systems for individuals and companies.  I have a keen eye for design aesthetic, and several years of experience in music/media production as well. 
                    <br/><br/>
                    Besides solving logic puzzles my favorite things to do are making music, travelling, and spending time with my fiancee, friends, family, and fur babies.
           
          </p>
          <br></br>
          <div className= "resumeButtonAlign">
          <a href={siteURL+"/media/Pollard_Resume.pdf"} download="" target="_blank">
            <button className="rounded-md text-right p-8 text-white resume">Download My Resume</button></a>
        </div></div>
        <div className="sectionHeader" ><br></br>
        <div className="flex flex-wrap">
        <div className="w-full sm:w-1/3 mb-4 leading-6 py-3"><span style={{fontFamily: "konnectBold", fontSize: "60px"}}>20+</span><br></br>
              <span style={{fontSize:"16px", color:"#dde"}}>years experience</span>
            </div>

            <div className="w-full sm:w-1/3 mb-4 leading-6 py-3"><span style={{fontFamily: "konnectBold", fontSize: "60px"}}>20+</span><br></br>
              <span style={{fontSize:"16px", color:"#dde"}}>libs+languages known</span>
            </div>
            <div className="w-full sm:w-1/3 mb-4 leading-6 py-3"><span style={{fontFamily: "konnectBold", fontSize: "60px"}}>AV</span><br></br>
              <span style={{fontSize:"16px", color:"#dde"}}>experience</span>
            </div>
          </div>



        </div>
        <br></br>

        <Form></Form>
        </motion.div>

    );
  }
}

export default AboutContent;
