import "./WhatsApp.css";

export const WhatsApp = () => {
  const phone = "573005019461";

  const message = encodeURIComponent(
    "Qué dicen, todo bien? Oee! una pregunta:"
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};