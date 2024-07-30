import React from 'react';
import styles from './Contact.module.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import Header from '../../Components/Header/Header';

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1e8aaaa4-3690-498c-a686-9165ab74aeca");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.contact}>
        <div className={styles.contactCol}>
          <h3>Send us a message <img src={msg_icon} alt="" /></h3>
          <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community</p>
       
          <ul className={styles.list}>
            <li><img src={mail_icon} alt="" />Contact@FoodHunt.dev</li>
            <li><img src={phone_icon} alt="" />+91 123456789</li>
            <li><img src={location_icon} alt="" />Near Old Bus stand, Pali <br /> MH, India</li>
          </ul>
        </div>
        <div className={styles.contactCol}>
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your Mobile Number' required />
            <label>Write your messages</label>
            <textarea name="message" rows='6' placeholder='Enter your Message' required></textarea>
            <button type='submit' className={`${styles.btn} ${styles.darkBtn}`}>Submit now <img src={white_arrow} alt="" /></button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
}

export default Contact;
