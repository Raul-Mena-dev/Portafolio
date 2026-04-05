function CustomCursor({ position, active }) {
  return (
    <>
      <span
        className={`cursor cursor--core ${active ? 'is-active' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        aria-hidden="true"
      />
      <span
        className={`cursor cursor--ring ${active ? 'is-active' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        aria-hidden="true"
      />
    </>
  )
}

export default CustomCursor
