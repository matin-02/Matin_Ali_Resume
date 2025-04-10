import './Achievements.css';
import { FaCertificate } from 'react-icons/fa';

const Achievements = () => (
  <section className="achievements-section">
    <h2><FaCertificate className="icon" /> Certifications</h2>
    <ul className="cert-list">
      <li>
        <FaCertificate className="bullet-icon" />
        Python Fundamentals for Beginners - GreatLearning
      </li>
      <li>
        <FaCertificate className="bullet-icon" />
        Certified Full Stack Developer - UDEMY
      </li>
      <li>
        <FaCertificate className="bullet-icon" />
        Introduction to Programming - UDEMY
      </li>
      <li>
        <FaCertificate className="bullet-icon" />
        MERN Stack Training (Ongoing) - Tutedude
      </li>
    </ul>
  </section>
);

export default Achievements;
