import SectionHeading from './SectionHeading'

function Experience({ experience }) {
  return (
    <section className="section" id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Professional history shaped around product delivery and frontend quality."
        description="A timeline layout keeps experience readable while preserving some personality."
      />

      <div className="timeline">
        {experience.map((item, index) => (
          <article
            key={`${item.company}-${item.role}`}
            className="timeline__item reveal"
            style={{ transitionDelay: `${Math.min(index * 90, 240)}ms` }}
          >
            <div className="timeline__marker" aria-hidden="true" />
            <div className="timeline__content">
              <div className="timeline__header">
                <div>
                  <span>{item.period}</span>
                  <h3>{item.role}</h3>
                </div>
                <strong>{item.company}</strong>
              </div>

              <p>{item.description}</p>

              <ul>
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
