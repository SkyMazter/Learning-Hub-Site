import SubjectCard from "../components/SubjectCard";
import HeroSection from "../components/HeroSection";

// Import your subject icons
import dockerIcon from "../assets/docker.png";
import blenderIcon from "../assets/blender.png";
import linuxIcon from "../assets/linux.png";
import gitIcon from "../assets/git.png";
const Home = () => {
  return (
    <>
      <HeroSection />
      <section className="subjects-section">
        <h2>Featured Subjects</h2>
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
    </>
  );
};

export default Home;
