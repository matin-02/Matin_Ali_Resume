import './BasicInfo.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaBirthdayCake, FaMale } from 'react-icons/fa';

const BasicInfo = () => (
  <section className="basic-info">
    <div className="info-container">
      <div className="intro">
        <h1>Mohammad Matin Ali</h1>
        <h3>Software Developer</h3>
        <p><FaBirthdayCake /> DOB: 30/03/2001</p>
        <p><FaMale /> Gender: Male</p>
        
        <p><FaMapMarkerAlt /> India</p>
      </div>

      <div className="contact-info">
        <p><FaEnvelope /> <a href="mailto:mohammadmatinali786@gmail.com">mohammadmatinali786@gmail.com</a></p>
        <p><FaPhone /> <a href="tel:+917666951836">+91 7666951836</a></p>
        <p><FaLinkedin /> <a href="https://www.linkedin.com/in/mohammad-matin-ali-232309219" target="_blank">LinkedIn</a></p>
        <p><FaGithub /> <a href="https://github.com/matin-02" target="_blank">GitHub</a></p>
      </div>
    </div>
  </section>
);

export default BasicInfo;
