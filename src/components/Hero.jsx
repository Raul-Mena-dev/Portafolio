function Hero({ personal, hero }) {
  const initials = personal.name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')

  return (
    <section className="hero section" id="home">
      <div className="hero__content reveal">
        <div className="hero__eyebrow">
          <span className="hero__status-dot" />
          {hero.eyebrow}
        </div>
        <p className="hero__intro">{personal.role}</p>
        <h1>{hero.title}</h1>
        <p className="hero__description">{hero.description}</p>

        <div className="hero__actions">
          {hero.primaryActions.map((action) => (
            <a
              key={action.label}
              className={`button button--${action.variant}`}
              href={action.href}
              download={action.download}
            >
              {action.label}
            </a>
          ))}
        </div>

        <ul className="hero__stats" aria-label="Key professional stats">
          {hero.stats.map((item) => (
            <li key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero__panel reveal reveal-delay">
        <div className="hero__panel-grid" />
        <div className="hero__card">
          <div className="hero__avatar" aria-hidden="true">
            <span>{initials}</span>
          </div>
          <div className="hero__identity">
            <span className="hero__identity-label">Professional Profile</span>
            <h2>{personal.name}</h2>
            <p>{personal.summary}</p>
          </div>
          <div className="hero__meta">
            <div>
              <span>Location</span>
              <strong>{personal.location}</strong>
            </div>
            <div>
              <span>Status</span>
              <strong>{personal.availability}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
