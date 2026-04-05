function Navbar({ items, activeSection, personal }) {
  const initials = personal.name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')

  return (
    <header className="navbar">
      <a className="navbar__brand" href="#home" aria-label="Go to home section">
        <span className="navbar__brand-mark">{initials}</span>
        <span className="navbar__brand-copy">
          <strong>{personal.name}</strong>
          <small>{personal.role}</small>
        </span>
      </a>

      <nav className="navbar__nav" aria-label="Section navigation">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={activeSection === item.href.slice(1) ? 'is-active' : ''}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
