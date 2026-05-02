function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          {project.buttonText}
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;