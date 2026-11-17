const teamMembers = [
  {
    name: 'Jose Bravo',
    role: 'Dirección General',
    bio: 'Lidera la visión estratégica y la excelencia operativa de AutoPrime con más de 15 años de experiencia automotriz.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80',
    email: 'jose.bravo@autoprime.com',
  },
  {
    name: 'Marco Rodriguez',
    role: 'Operaciones y Logística',
    bio: 'Coordina la revisión técnica, transporte e inventario garantizando entregas puntuales y vehículos certificados.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80',
    email: 'marco.rodriguez@autoprime.com',
  },
  {
    name: 'Irlanda Salero',
    role: 'Marketing y Adquisición',
    bio: 'Impulsa el posicionamiento de marca y gestiona las mejores oportunidades de compra y comercialización del mercado.',
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=600&auto=format&fit=crop&q=80',
    email: 'irlanda.salero@autoprime.com',
  },
  {
    name: 'Winayra Urbina',
    role: 'Atención al Cliente y Postventa',
    bio: 'Asegura una experiencia transparente y acompañamiento continuo antes, durante y después de cada compra.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80',
    email: 'winayra.urbina@autoprime.com',
  },
]

function TeamSection() {
  return (
    <section className="team" id="equipo">
      <div className="team__container">
        <div className="section-header">
          <span className="section-label">Liderazgo & Compromiso</span>
          <h2 className="section-title">Nuestro Equipo</h2>
          <p className="section-subtitle">
            Conoce a los profesionales apasionados que hacen de AutoPrime el marketplace automotriz líder y de confianza.
          </p>
        </div>

        <div className="team__grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-card__image-wrapper">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="team-card__image"
                  loading="lazy"
                />
                <div className="team-card__overlay">
                  <span className="team-card__badge">{member.role}</span>
                </div>
              </div>

              <div className="team-card__content">
                <h3 className="team-card__name">{member.name}</h3>
                <span className="team-card__role">{member.role}</span>
                <p className="team-card__bio">{member.bio}</p>

                <div className="team-card__contact">
                  <a
                    href={`mailto:${member.email}`}
                    className="team-card__social-link"
                    title={`Contactar a ${member.name}`}
                    aria-label={`Email ${member.name}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </a>
                  <a
                    href="#contacto"
                    className="team-card__social-link"
                    title={`LinkedIn de ${member.name}`}
                    aria-label={`LinkedIn ${member.name}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
