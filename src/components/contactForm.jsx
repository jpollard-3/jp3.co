import { useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

import { email } from './common/branding';
const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);  

    const [capVal, setCapVal] = useState(null);

    const sendEmail = (e) => {
      e.persist();
      e.preventDefault();
      setIsSubmitting(true);    emailjs
        .sendForm(
          'service_l4e8xkd',
          'template_tlp5o4f',
          e.target,
          { publicKey: 'QoVT1cgnuWeCNpTwB'}
        )
        .then(
          (result) => {
            setStateMessage('Message sent!');
            console.log("email sent.");
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 15000); // hide message after 5 seconds
          },
          (error) => {
            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 15000); // hide message after 5 seconds
          }
        );
      
      // Clears the form after sending the email
      e.target.reset();
    };  
    

    
    return (

      <>

 

 
 
 <div className="w-full align-top mx-auto  flex flex-col md:flex-row md:py-3 md:mt-2 items-center content-center justify-center">
       

               <div  className="rounded-md shadow-md w-full basis-1/2 p-4" style={{
        background: "#242D40", textAlign: "center"
      }}>   
  <h3 className="text-left align-top text-3xl" style={{fontFamily:"konnectBold" }} >Contact Form</h3>
      <form onSubmit={sendEmail}>
        {stateMessage && <p>{stateMessage}</p>}
        <table className="w-full" style={{ width:"100%", textAlign: "left", borderSpacing: "2px", marginLeft: "auto", marginRight: "auto",}}><tbody>
        <tr >
          <td style={{textAlign: "left",paddingLeft: "4px"}}>
            <label htmlFor="nm">Name&nbsp;</label>
          </td>
          </tr><tr>
          <td>  
          <input className="rounded w-full" id="nm" type="text" name="user_name" />
          </td>
        </tr>
        <tr>
        <td style={{textAlign: "left",paddingLeft: "4px"}}>
            <label htmlFor="em">Email&nbsp;</label>
          </td>
          </tr><tr>
          <td>  
          <input className ="rounded w-full" id="em" type="text" name="user_email" />
          </td>
        </tr>
        <tr>
        <td style={{textAlign: "left", verticalAlign: "top", paddingTop: "5px", paddingLeft: "4px"}}>
            <label htmlFor="ms">Message&nbsp;</label>
          </td>
          </tr><tr>
          <td>  
          <textarea className="rounded-md w-full" id="ms" name="message" />
          </td>
        </tr>

       
      </tbody>
      </table> <br /><div style={{textAlign: "center", width:"100%"}} > <ReCAPTCHA  
      sitekey="6LebMhsrAAAAAB4ey61u4gZ2r5SM5F8pjoPOWTzp"
      size="normal"
      theme="light"
      onChange={(val)=>setCapVal(val)}
      /> </div> <br /><input type="submit" value="Send" disabled={isSubmitting  || !capVal } />     <br />
        <br /></form></div> 
        
        
        
        <div className="w-full basis-1/2 px-10 py-2      
        font-general-medium
    text-xl 
    mt-0 align-top object-top self-start"><span className="object-top h-full inline mt-0 align-top">
      <h3 className=" align-top text-3xl" style={{fontFamily:"konnectBold" }} >Contact / Socials</h3>
      <ul className="p-0 font-general-regular"><li  className="flex p-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin w-5 text-gray-500 dark:text-gray-400 mr-4" ><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> <span aria-label="Website and Phone" className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
     Texas
    </span></li><li className="p-0 flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail w-5 text-gray-500 dark:text-gray-400 mr-4" data-v-3f157150=""><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> <a  href={"mailto:"+email} aria-label="Website and Phone" className="text-lg mb-4 text-ternary-dark dark:text-ternary-light hover:underline cursor-pointer">
      {email}
    </a></li>

    <li className="p-0 flex"><img src="github-mark-white.svg" style={{width: "24px",height: "24px"}} /><a  href="https://github.com/jpollard-3" aria-label="GitHub" style={{paddingLeft: "10px"}} className="text-lg mb-4 text-ternary-dark dark:text-ternary-light hover:underline cursor-pointer">
      https://github.com/jpollard-3
    </a></li>



    </ul> </span></div><div></div>
        
        
        
        
        </div>


        </>
    );
  };export default ContactForm;



