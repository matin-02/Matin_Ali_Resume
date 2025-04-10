import './WorkExperience.css';
import { FaBriefcase, FaClock } from 'react-icons/fa';

const WorkExperience = () => (
  <section className="experience-section">
    <h2>Internship Experience</h2>

    <div className="experience-card">
      <h3><FaBriefcase /> Software Developer - Numetry Technology</h3>
      <p className="status"><FaClock /> Status: <span>Ongoing</span></p>
      <ul>
        <li>Working on real-time web applications using React and Firebase.</li>
        <li>Collaborating with team members for feature development and debugging.</li>
        <li>Practicing agile methodologies and version control using Git.</li>
      </ul>
    </div>

    <div className="experience-card">
      <h3><FaBriefcase /> Java Full Stack Developer - Excelr Solution</h3>
      <p className="status"><FaClock /> Status: <span>Ongoing</span></p>
      <ul>
        <li>Learning and applying full stack development using Java, Spring Boot, and MySQL.</li>
        <li>Gaining exposure to backend API design and integration with frontend systems.</li>
        <li>Participating in hands-on projects and team-based assignments.</li>
      </ul>
    </div>
  </section>
);

export default WorkExperience;

  