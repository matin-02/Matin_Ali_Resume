import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import DownloadButton from './components/DownloadButton';
import BasicInfo from './components/BasicInfo';
import Summary from './components/Summary';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Achievements from './components/Achievements';

function App() {
  return (
    <>
      <Header />
      <ThemeToggle />
      <DownloadButton />
      <div id="resume">
        <BasicInfo />
        <Summary />
        <WorkExperience />
        <Projects />
        <Education />
        <Skills />
        <Languages />
        <Achievements />
      </div>
    </>
  );
}

export default App;
