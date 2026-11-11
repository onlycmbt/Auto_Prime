import { useState } from 'react'

const cars = [
  {
    id: 1,
    brand: 'BMW',
    model: 'Serie 3',
    year: 2024,
    mileage: '0 km',
    transmission: 'Automático',
    price: '$45,000',
    type: 'Compra',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80',
  },
  {
    id: 2,
    brand: 'Mercedes-Benz',
    model: 'Clase C',
    year: 2023,
    mileage: '12,000 km',
    transmission: 'Automático',
    price: '$850/mes',
    type: 'Renta',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80',
  },
  {
    id: 3,
    brand: 'Audi',
    model: 'A4',
    year: 2024,
    mileage: '0 km',
    transmission: 'Automático',
    price: '$42,000',
    type: 'Compra',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80',
  },
  {
    id: 4,
    brand: 'Porsche',
    model: 'Cayenne',
    year: 2023,
    mileage: '8,500 km',
    transmission: 'Automático',
    price: '$1,200/mes',
    type: 'Renta',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80',
  },
  {
    id: 5,
    brand: 'Tesla',
    model: 'Model 3',
    year: 2024,
    mileage: '0 km',
    transmission: 'Eléctrico',
    price: '$38,000',
    type: 'Compra',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80',
  },
  {
    id: 6,
    brand: 'Ford',
    model: 'Mustang',
    year: 2023,
    mileage: '5,000 km',
    transmission: 'Manual',
    price: '$950/mes',
    type: 'Renta',
    image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=600&q=80',
  },
]

function CarCard({ car }) {
  return (
    <div className="car-card">
      <div className="car-card__image-wrap">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="car-card__image"
        />
        <span className={`car-card__badge car-card__badge--${car.type.toLowerCase()}`}>
          {car.type}
        </span>
      </div>
      <div className="car-card__body">
        <h3 className="car-card__title">
          {car.brand} <span>{car.model}</span>
        </h3>
        <div className="car-card__meta">
          <span>📅 {car.year}</span>
          <span>🛣️ {car.mileage}</span>
          <span>⚙️ {car.transmission}</span>
        </div>
        <div className="car-card__footer">
          <span className="car-card__price">{car.price}</span>
          <button className="car-card__btn">Ver Detalles</button>
        </div>
      </div>
    </div>
  )
}

function CatalogSection() {
  const [filter, setFilter] = useState('Todos')

  const filtered =
    filter === 'Todos' ? cars : cars.filter((c) => c.type === filter)

  return (
    <section className="catalog" id="catalogo">
      <div className="catalog__container">
        <div className="section-header">
          <span className="section-label">Nuestro Catálogo</span>
          <h2 className="section-title">Vehículos Destacados</h2>
          <p className="section-subtitle">
            Explora nuestra selección de los mejores autos del mercado
          </p>
        </div>

        <div className="catalog__filters">
          {['Todos', 'Compra', 'Renta'].map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="catalog__grid">
          {filtered.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CatalogSection
