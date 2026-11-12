function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__overlay" />
      <div className="hero__content">
        <span className="hero__badge">🏆 El Marketplace Nº1 de Autos</span>

        <h1 className="hero__title">
          Llevate Tu <span>Carro Perfecto</span>
        </h1>

        <p className="hero__subtitle">
          Compra, vende o renta tu próximo vehículo con total seguridad.
          Miles de opciones al mejor precio.
        </p>

        <div className="hero__actions">
          <a href="#catalogo" className="btn btn--primary">Explorar Catálogo</a>
          <a href="#" className="btn btn--outline">Vender Mi Auto</a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <strong>+5,000</strong>
            <span>Autos Disponibles</span>
          </div>
          <div className="hero__divider" />
          <div className="hero__stat">
            <strong>+200</strong>
            <span>Marcas</span>
          </div>
          <div className="hero__divider" />
          <div className="hero__stat">
            <strong>98%</strong>
            <span>Satisfacción</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
