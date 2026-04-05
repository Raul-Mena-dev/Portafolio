import SectionHeading from './SectionHeading'

function Contact({ contact, personal }) {
  return (
    <section className="section" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title={contact.title}
        description={contact.description}
      />

      <div className="contact reveal">
        <div className="contact__panel">
          <p>
            Available for frontend engineering, UI implementation, and product-focused web work.
          </p>
          <a className="button button--solid" href={`mailto:${personal.email}`}>
            Start a Conversation
          </a>
        </div>

        <div className="contact__links" aria-label="Professional contact links">
          {contact.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              <span>{link.label}</span>
              <strong>{link.value}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
