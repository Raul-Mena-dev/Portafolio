import SectionHeading from './SectionHeading'

function Projects({ projects }) {
  return (
    <section className="section" id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work with a balance of visual polish and implementation discipline."
        description="Swap, add, or remove projects from the data file without changing the card structure."
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            className="project-card reveal"
            key={project.name}
            style={{ transitionDelay: `${Math.min(index * 90, 240)}ms` }}
          >
            <div className="project-card__visual">
              <div className="project-card__screen">
                <span>{project.year}</span>
                <strong>{project.name}</strong>
              </div>
            </div>

            <div className="project-card__body">
              <p>{project.description}</p>

              <ul className="project-card__metrics">
                {project.metrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>

              <div className="project-card__stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-card__links">
                <a href={project.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
