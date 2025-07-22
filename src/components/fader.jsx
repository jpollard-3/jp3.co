import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";




const variants = {
  enter: () => {
    return {
      opacity: 0,
      scale: 0.7,
    };
  },

  center: {
    zIndex: 1,
    x: 0,
    scale: 1,
    opacity: 1,
    position: "inline", 
  },
  exit: () => {
    return {
      zIndex: 0,
      scale: .7,
      opacity: 0,
      duration: .2,
      position: "absolute", 
      transitionEnd: {display: "none",},
    };
  },
};

const show = {
  opacity: 1,
  duration: .01,
  display: "block"
};

const hide = {
  opacity: 0,
  duration: .3,
  transitionEnd: {
    display: "none"
  }
};



export const CaptionFader = ({ in: inProp, cpiL:imgLocation}) => {
  const duration = 300;
  const inp=true;
  const nodeRef = useRef(null);

  let caption = "caption";
  if (!inProp) {
    caption += " hidden";
  }
 
  let br = "bottom-right";
  if (!imgLocation) {
    br += " hidden";
  }

  return (
<div>
    <div className="capcontainer"><div className={br}>{imgLocation}&nbsp;</div></div>
    <div className="container">
    <div className={caption}>
      <div className="captionContainer ">
        <div className="captionTextContainer  ">
    <TransitionGroup>
    <CSSTransition

        key={inProp} 
        nodeRef={nodeRef} 
        timeout={duration} 
        className='captioner'>
   
        <div ref={nodeRef} className="captioner">
        <table className="captioner min">
                    <tbody>
                      <tr className="min">
                        <td className="captionText ">LET'S</td>
                      </tr>
                      <tr className="min">
                        <td className="captionBold ">MAKE</td>
                      </tr>
                      <tr className="min">
                        <td className="captionText ">SOMETHING</td>
                      </tr>
                    </tbody>
                  </table>
        </div>

    </CSSTransition></TransitionGroup>
    </div>
              </div>
              
            </div>
            
          </div></div>
  );


}


export const Fader = ({cap: captor, src:bi, cl:currentLocation, cpi:currentPageImg, eraser:eraser}) => {

  //const [[page],Pages];
 const isVisible=eraser;

  const cl=currentLocation;
  const cpi=currentPageImg;
  const cappa={captor};

const imageIndex = 0;

  const inp=true;
  const nodeRef = useRef(null);
  let cName = "imager_new";
  if (eraser){cName = "imager_gone";}

  return (

 
    <motion.div 
    className="box" 
    animate={isVisible ? hide : show} 
    transition={{
      scale: { type: "spring", stiffness: 300, damping: 25 },
      opacity: { duration: .1 },
    }}
    >
    <AnimatePresence initial={true}>
    <motion.img
      className={cName}
      key={bi}
      src={bi}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        scale: { type: "spring", stiffness: 300, damping: 25 },
        opacity: { duration: 0.5 },
      }}
    /> </AnimatePresence></motion.div>
  
  );
    }



  export const Fader2 = ({cap: captor, src:bi, cl:currentLocation, cpi:currentPageImg}) => {

    const cl=currentLocation;
    const cpi=currentPageImg;
    const cappa={captor};

  const imageIndex = 0;

    const inp=true;
    const nodeRef = useRef(null);
    let cName = "imager_new";
    if (cpi==="tpbg.png"){cName = "imager_gone";}
  
    return (
  <>
      <AnimatePresence mode="sync" initial={true} >
    
      <motion.img
        className={cName}
        id="bg"
        key={bi}
        src={bi}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 27, duration:0.0 },
        /*   scale: {duration: 0.2}, */
          opacity: { duration: 0.0 },
        }}
      />
      {(cappa) ? <CaptionFader in:false img:none /> : <> </>}
      
    </AnimatePresence>

    </>
    );
      }