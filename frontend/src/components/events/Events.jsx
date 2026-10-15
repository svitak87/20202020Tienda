import "./Events.css";
import eventOne from "../../assets/images/events/evento-uno.png";
import eventTwo from "../../assets/images/events/evento-dos.png";
import eventThree from "../../assets/images/events/evento-tres.png";

export const Events = () => {
  return (
    <>
      <h2>Eventos</h2>
      <div className="events-container">
        <img
          src={eventOne}
          alt="Evento 20202020Tienda 1"
          loading="lazy"
          decoding="async"
        />
        <img
          src={eventTwo}
          alt="Evento 20202020Tienda 2"
          loading="lazy"
          decoding="async"
        />
        <img
          src={eventThree}
          alt="Evento 20202020Tienda 3"
          loading="lazy"
          decoding="async"
        />
      </div>
    </>
  );
};
