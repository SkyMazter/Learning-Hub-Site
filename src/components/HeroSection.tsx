const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <h1>
          Master New Skills, <br />
          One Module at a Time
        </h1>
        <p>
          This evolving platform is dedicated to empowering new developers by
          illuminating the essential concepts and practical skills rarely taught
          in conventional coding classes and bootcamps.
        </p>

        <p>
          My mission is to share distilled, real-world knowledge and personal
          learnings, ensuring that aspiring programmers gain a holistic
          understanding of the development landscape from day one.
        </p>
        <button className="btn primary-btn">Explore Subjects</button>
      </div>
    </section>
  );
};

export default HeroSection;
