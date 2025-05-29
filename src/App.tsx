import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SubjectCard from './components/SubjectCard';

// Import your subject icons
import dockerIcon from './assets/docker.png';
import blenderIcon from './assets/blender.png';
import linuxIcon from './assets/linux.png';
import gitIcon from './assets/git.png';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />

      <section className="subjects-section">
        <h2>Subjects</h2>
        <div className="subject-cards-grid">
          <SubjectCard
            icon={dockerIcon}
            title="Docker"
            description="Begin your journey with containerization"
          />
          <SubjectCard
            icon={blenderIcon}
            title="Blender"
            isComingSoon
            description="Discover the basics of 3D modeling"
          />
          <SubjectCard
            icon={linuxIcon}
            title="Linux"
            isComingSoon
            description="Understand how to install and run Linux Distros"
          />
          <SubjectCard
            icon={gitIcon}
            title="Git"
            description="Learn version control and collaboration"
            isComingSoon
          />
        </div>
      </section>
    </div>
  );
}

export default App;