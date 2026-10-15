import "./Home.css";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero/hero-image.png";
import heroOne from "../../assets/images/hero/hero-uno.png";
import heroTwo from "../../assets/images/hero/hero-dos.png";
import heroThree from "../../assets/images/hero/hero-tres.png";

import { Camisetas } from "../../components/camisetas/Camisetas.jsx";
import { Navbar } from "../../components/navbar/Navbar.jsx";
import { Rompevientos } from "../../components/rompevientos/Rompevientos.jsx";
import { Events } from "../../components/events/Events.jsx";
import { Location } from "../../components/location/Location.jsx";
import { Accesories } from "../../components/accesories/Accesories.jsx";
import { Footer } from "../../components/footer/Footer.jsx";
import { WhatsApp } from "../../components/whatsapp/Whatsapp.jsx";
import { Seo } from "../../components/seo/Seo.jsx";

export const Home = () => {
  return (
    <>
      <Seo />
      <header className="header" id="top">
        <Navbar />
      </header>
      <main>
        <section className="hero-section">
          <img
            src={heroImage}
            alt="This is Hardkore, marca colombiana de ropa urbana y cultura hip hop"
            className="hero"
            fetchPriority="high"
            decoding="async"
          />
        </section>
        <section className="brand-intro">
          <h1>Streetwear retro y contracultural con puntos de venta en Bogotá</h1>
          <p className="section-description">
            20202020Tienda es streetwear retro y contracultural: seleccionamos{" "}
            <Link to="/rompevientos">rompevientos</Link>,{" "}
            <Link to="/camisetas">camisetas retro</Link> y{" "}
            <Link to="/accesorios">accesorios vintage</Link> con una mirada de
            upcycling y ropa vintage, para un estilo urbano
            alternativo con personalidad propia.
          </p>
        </section>
        <section className="rompevientos">
          <Rompevientos />
        </section>
        <section className="hero-one">
          <img
            src={heroOne}
            alt="Modelo de 20202020Tienda con estética streetwear retro"
            loading="lazy"
            decoding="async"
          />
        </section>
        <section className="camisetas">
          <Camisetas />
        </section>
        <section className="hero-two">
          <img
            src={heroTwo}
            alt="Modelo de 20202020Tienda con ropa urbana retro"
            loading="lazy"
            decoding="async"
          />
          <img
            src={heroThree}
            id="image-big"
            alt="Modelo de 20202020Tienda con estilo streetwear contracultural"
            loading="lazy"
            decoding="async"
          />
        </section>
        <section className="events" id="eventos">
          <Events />
        </section>
        <section className="location">
          <Location />
        </section>
        <section className="accesories">
          <Accesories />
        </section>
        <WhatsApp />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
