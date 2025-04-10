import './Education.css';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => (
  <section className="education-section">
    <h2>Education</h2>

    <div className="education-timeline">
      <div className="education-item">
        <FaGraduationCap className="icon" />
        <div>
          <h3>SSC</h3>
          <p>The New Era English High School, Rajura</p>
          <span>2017</span>
        </div>
      </div>

      <div className="education-item">
        <FaGraduationCap className="icon" />
        <div>
          <h3>HSC</h3>
          <p>Moshinbhai Zaweri Junior College, Chandrapur</p>
          <span>2019</span>
        </div>
      </div>

      <div className="education-item">
        <FaGraduationCap className="icon" />
        <div>
          <h3>Bachelor of Computer Application</h3>
          <p>Dr. D.Y. Patil Arts, Commerce and Science College, Pimpri, Pune</p>
          <span>2019 - 2022</span>
        </div>
      </div>

      <div className="education-item">
        <FaGraduationCap className="icon" />
        <div>
          <h3>Master's of Computer Application</h3>
          <p>JSPM's Rajarshi Shahu College of Engineering, Tathawade</p>
          <span>2023 - 2025</span>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
