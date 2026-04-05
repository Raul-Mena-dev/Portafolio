import SectionHeading from './SectionHeading'

function About({ about, technologies }) {
  return (
    <section className="section" id="about">
      <SectionHeading
        eyebrow="About"
        title={about.heading}
        description="A concise professional summary that can be updated without touching the layout."
      />

      <div className="about">
        <div className="about__copy reveal">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="about__panel reveal reveal-delay">
          <span className="panel__badge">Current Focus</span>
          <ul className="about__highlights">
            {about.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <div className="about__tags">
            {technologies.slice(0, 6).map((technology) => (
              <span key={technology.name}>{technology.name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
