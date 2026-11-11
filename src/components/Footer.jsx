function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              Auto<span>Prime</span>
            </a>
            <p>
              El marketplace de autos más completo. Compra, vende o renta
              con total confianza y seguridad.
            </p>
          </div>

          <div className="footer__col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#">Sobre Nosotros</a></li>
              <li><a href="#">Nuestro Equipo</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Prensa</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#">Compra de Autos</a></li>
              <li><a href="#">Renta de Autos</a></li>
              <li><a href="#">Vende Tu Auto</a></li>
              <li><a href="#">Financiamiento</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Términos de Uso</a></li>
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Garantías</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2025 AutoPrime. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
