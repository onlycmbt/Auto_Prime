const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: 'Transacciones Seguras',
    desc: 'Verificamos cada vendedor y protegemos tu inversión con garantías y respaldo legal en cada operación.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11l5 5v6a2 2 0 0 1-2 2z" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
    title: 'Amplio Inventario',
    desc: 'Más de 5,000 vehículos de las mejores marcas del mundo. Desde autos económicos hasta lujo premium.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42C1.6 2.3 2.4 1.46 3.52 1.46h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91A16 16 0 0 0 14.09 16l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: 'Soporte 24/7',
    desc: 'Nuestro equipo de expertos está disponible las 24 horas para ayudarte en cada paso del proceso.',
  },
]

function FeaturesSection() {
  return (
    <section className="features" id="caracteristicas">
      <div className="features__container">
        <div className="section-header">
          <span className="section-label">¿Por qué elegirnos?</span>
          <h2 className="section-title">Nuestras Ventajas</h2>
          <p className="section-subtitle">
            Lo que nos hace diferentes y por qué miles confían en nosotros
          </p>
        </div>

        <div className="features__grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
