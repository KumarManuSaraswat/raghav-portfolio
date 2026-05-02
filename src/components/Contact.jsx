function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact-box">
        <p className="section-label">Contact</p>
        <h2>Let’s connect</h2>
        <p className="section-text">
          For collaborations, freelance opportunities, or creative projects,
          reach out through email or social platforms.
        </p>

        <div className="contact-links">
          <a href="mailto:yourmail@example.com" className="btn btn-primary">Email</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Instagram</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;