import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>20202020Tienda</h2>

          <p>
            Streetwear retro y contracultural que fusiona la estética urbana con
            la rebeldía de otras épocas, creando una identidad auténtica,
            disruptiva y sin reglas.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>

          <p>
            <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
            Sonora Showroom
          </p>
          <p>
            <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
            Cubo Colectivo
          </p>

          <p>
            <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
            <a
              href="https://wa.me/573005019461"
              target="_blank"
              rel="noopener noreferrer"
            >
              +57 300 501 9461
            </a>
          </p>
        </div>

        <div className="footer-payment" id="medios-de-pago">
          <h3>Medios de pago</h3>

          <div className="payment-icons">
            <i className="fa-brands fa-cc-visa" title="Visa"></i>
            <i className="fa-brands fa-cc-mastercard" title="Mastercard"></i>
            <i className="fa-brands fa-cc-amex" title="American Express"></i>

            <span className="payment-text">Nequi</span>
            <span className="payment-text">Daviplata</span>
            <span className="payment-text">Efectivo</span>
            <span className="payment-text">Transferencia</span>
          </div>
        </div>

        <div className="footer-social">
          <h3>Sígannos</h3>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/20202020.tienda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram 20202020Tienda"
              title="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://www.facebook.com/veinteveinteveinteveinte"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook 20202020Tienda"
              title="Facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.threads.com/@20202020.tienda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads 20202020Tienda"
              title="Threads"
            >
              <i className="fa-brands fa-threads"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-20202020">
          <span>20202020</span>
        </div>
        <br />
        <p>
          © {new Date().getFullYear()} 20202020Tienda - Bogotá - Colombia. Todos
          los derechos reservados.
          <br />
          Hecho a mano con <i className="fa-solid fa-heart"></i>, en Argentina.
        </p>
      </div>
    </footer>
  );
};
