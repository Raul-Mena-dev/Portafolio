function BackToTop({ visible }) {
  return (
    <a
      className={`back-to-top ${visible ? 'is-visible' : ''}`}
      href="#home"
      aria-label="Back to top"
    >
      ↑
    </a>
  )
}

export default BackToTop
