import React from "react";
import './Contact.css';

const ContactContent = () => {

  return (
    <div className="container contain">
        <h3>Contact Us</h3>
  <form >

    <label for="fname">Full Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Name.."/>

    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Email Id.."/>

    <label for="message">Query</label>
    <textarea id="message" name="message" placeholder="Write your query..." style={{height:"200px"}}></textarea>

    <input type="submit" value="Submit"/>

  </form>
</div>
  );
};

export default ContactContent;