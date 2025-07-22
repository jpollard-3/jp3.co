import React, { Component } from "react";
import ContactForm from "./contactForm.jsx";
import { motion } from "framer-motion";


class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  state = {value: ''};
  render() {
    return (

      <motion.div
      initial={{opacity: 0, scale: 0.7}}
      animate={{opacity: 1, scale: 1, transition:{delay: 0.6}}}
      exit={{opacity: 0, scale:0.7,  transition:{duration:0.1,delay:0}}}
      
      >
      <div className="block2">  
        <h4 style={{ fontSize: "23px" }}>Let's work together!</h4>
        <br></br>
        <section id="contact">
          <ContactForm />
        </section>        
        </div>
 
 

</motion.div>
    );
  }
}

export default Form;

