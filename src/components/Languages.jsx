import './Languages.css';
import { FaLanguage } from 'react-icons/fa';

const Languages = () => (
  <section className="languages-section">
    <h2><FaLanguage className="lang-icon" /> Languages</h2>
    <div className="language-list">
      <span>English</span>
      <span>Hindi</span>
      <span>Marathi</span>
    </div>
  </section>
);

export default Languages;
