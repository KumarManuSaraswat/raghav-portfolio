import { useState } from "react";
import { projects } from "../data/projects";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

function Projects() {
  const categories = ["All", ...new Set(projects.map((item) => item.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((item) => item.category === selectedCategory);

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionTitle
          label="Projects"
          title="Selected work across animation, design, and visual exploration"
          text="A mix of motion studies, posters, sketches, 3D work, and illustrations."
        />

        <div className="filter-row">
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "filter-btn active" : "filter-btn"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;