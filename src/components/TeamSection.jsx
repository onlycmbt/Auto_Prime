const team = [
  {
    name: 'Jose Bravo',
    role: 'Director de Negocio',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5}>
        <path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2z" />
        <path d="M3 21c0-4.418 4.03-8 9-8s9 3.582 9 8" />
        <path d="M17 8l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Winayra Urbina',
    role: 'Community Manager',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5}>
        <path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a2 2 0 0 1-2-2v-1" />
        <path d="M3 4h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 4V6a2 2 0 0 1 0 0" />
        <rect x="3" y="4" width="13" height="10" rx="2" />
      </svg>
    ),
  },
  {
    name: 'Marco Rodriguez',
    role: 'Encargado de Logística',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5}>
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 4v4h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    name: 'Irlanda Solero',
    role: 'Encargada de Atención al Cliente',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.8 19.8 0 0 1 1.63 3.47 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
]

export default function TeamSection() {
  return (
    <section className="team" id="equipo">
      <div className="team__container">
        <div className="section-header">
          <span className="section-label">Nuestro Equipo</span>
          <h2 className="section-title">Las personas detrás de <span>Auto Prime</span></h2>
          <p className="section-subtitle">
            Un equipo comprometido con brindarte la mejor experiencia en cada paso.
          </p>
        </div>

        <div className="team__grid">
          {team.map((member) => (
            <div className="team-card" key={member.name}>
              <div className="team-card__avatar">
                {member.icon}
              </div>
              <h3 className="team-card__name">{member.name}</h3>
              <p className="team-card__role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
