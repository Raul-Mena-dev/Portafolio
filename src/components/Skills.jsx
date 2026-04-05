import SectionHeading from './SectionHeading'

function Skills({ technologies }) {
  return (
    <section className="section" id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Technical strengths presented with clear visual hierarchy."
        description="Editable frontend data powers each card and proficiency meter."
      />

      <div className="skills-grid">
        {technologies.map((technology, index) => (
          <article
            className="skill-card reveal"
            style={{ transitionDelay: `${Math.min(index * 70, 280)}ms` }}
            key={technology.name}
          >
            <div className="skill-card__head">
              <span>{technology.category}</span>
              <strong>{technology.name}</strong>
            </div>
            <div className="skill-card__meter" aria-hidden="true">
              <span style={{ width: `${technology.level}%` }} />
            </div>
            <p>{technology.level}% confidence in production use</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
