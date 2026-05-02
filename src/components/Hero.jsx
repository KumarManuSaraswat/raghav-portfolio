function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">Portfolio 2026</p>
          <h1>Raghav Parasrampuria</h1>
          <p className="hero-subtext">
            Animation enthusiast and design aspirant exploring storytelling
            through motion, color, form, sketching, and digital experimentation.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Work</a>
            <a href="#contact" className="btn btn-secondary">Contact</a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img src="/images/hero.jpg" alt="Raghav portfolio hero" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;