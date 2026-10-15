
import "./Location.css";

const ubicaciones = [
  {
    id: "sonora",
    nombre: "Sonora Showroom",
    direccion: "Calle 69 #11a - 42, Bogotá, Colombia",
    horarios: [
      "Lunes a sábados: 11:00 a 19:00 hs",
    ],
  },
  {
    id: "cubo",
    nombre: "Cubo Colectivo",
    direccion:
      "Cra. 7 #54a-36, Local 101, Bogotá, Colombia 110231",
    horarios: [
      "Consultar horarios de atención",
    ],
  },
];

const LocationCard = ({ ubicacion }) => {
  const queryUbicacion = encodeURIComponent(
    `${ubicacion.nombre}, ${ubicacion.direccion}`
  );

  return (
    <article className="location-card">
      <div className="location-info">
        <h3>{ubicacion.nombre}</h3>

        <p>
          <i className="fa-solid fa-location-dot"></i>
          {ubicacion.direccion}
        </p>

        {ubicacion.horarios.map((horario, index) => (
          <p key={index}>
            <i className="fa-regular fa-clock"></i>
            {horario}
          </p>
        ))}

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${queryUbicacion}`}
          target="_blank"
          rel="noopener noreferrer"
          className="location-button"
        >
          <i className="fa-solid fa-diamond-turn-right"></i>
          Cómo llegar
        </a>
      </div>

      <div className="location-map">
        <iframe
          src={`https://www.google.com/maps?q=${queryUbicacion}&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Ubicación de ${ubicacion.nombre}`}
        ></iframe>
      </div>
    </article>
  );
};

export const Location = () => {
  return (
    <section className="location" id="ubicacion">
      <h2>Nos pueden encontrar en Bogotá</h2>

      <p className="section-description">
        Puntos de venta y showrooms de 20202020Tienda, donde encontrás nuestra
        selección de streetwear retro y ropa vintage en Colombia.
      </p>

      <div className="locations-list">
        {ubicaciones.map((ubicacion) => (
          <LocationCard
            key={ubicacion.id}
            ubicacion={ubicacion}
          />
        ))}
      </div>
    </section>
  );
};
