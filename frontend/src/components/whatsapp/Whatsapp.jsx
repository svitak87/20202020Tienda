import { useEffect, useState } from "react";
import "./Whatsapp.css";

export const WhatsApp = () => {
  const [hidden, setHidden] = useState(false);
  const phone = "573005019461";

  const message = encodeURIComponent(
    "Qué dicen, todo bien? Oee! una pregunta:"
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(([entry]) => {
      setHidden(entry.isIntersecting);
    }, { rootMargin: "0px 0px 100px 0px" });

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button${hidden ? " is-hidden" : ""}`}
      aria-label="Contactar por WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};
