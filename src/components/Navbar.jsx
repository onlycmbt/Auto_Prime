function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="#" className="navbar__logo">
          Auto<span>Prime</span>
          <svg
            className="navbar__logo-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
        </a>

        <nav className="navbar__nav">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#catalogo">Catálogo</a></li>
            <li><a href="#caracteristicas">Características</a></li>
            <li><a href="#equipo">Equipo</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>

        <button className="navbar__cta">Publicar Auto</button>
      </div>
    </header>
  )
}

export default Navbar
