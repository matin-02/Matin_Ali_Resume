import './Skills.css';
import { FaCode, FaDatabase } from 'react-icons/fa';

const Skills = () => (
  <section className="skills-section">
    <h2>Skills</h2>

    <div className="skills-category">
      <h3><FaCode className="icon" /> Programming & Frameworks</h3>
      <div className="skills-list">
        <span>Java</span>
        <span>Python</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>React</span>
        <span>jQuery</span>
        <span>JavaScript</span>
      </div>
    </div>

    <div className="skills-category">
      <h3><FaDatabase className="icon" /> Databases</h3>
      <div className="skills-list">
        <span>MySQL</span>
        <span>MongoDB</span>
      </div>
    </div>
  </section>
);

export default Skills;
