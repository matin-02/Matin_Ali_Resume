import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => (
  <section className="projects-section">
    <h2>Projects</h2>

    <div className="projects-grid">
      <div className="project-card">
        <h3>🌤️ Weather App</h3>
        <div className="project-links">
          <a href="https://github.com/matin-02/Wheather-App" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://wheather-app-roan.vercel.app/" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Live
          </a>
        </div>
        <ul>
          <li>Responsive Weather App built using React and Tailwind CSS.</li>
          <li>Displays current weather and a 5-day forecast based on user search.</li>
        </ul>
      </div>

      <div className="project-card">
        <h3>🗺️ Leaflet Map App</h3>
        <div className="project-links">
          <a href="https://github.com/matin-02/React-LeafletMap" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://react-leaflet-map-sand.vercel.app/" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Live
          </a>
        </div>
        <ul>
          <li>Interactive map application using React and Leaflet.</li>
          <li>Allows users to mark, swap, and search locations on an Indian map.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Projects;
