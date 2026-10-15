import "./Rompevientos.css";
import { ProductGrid } from "../productGrid/ProductGrid.jsx";

export const Rompevientos = () => {
  return (
    <section id="rompevientos">
      <h2>Rompevientos</h2>
      <p className="section-description">
        Rompevientos con estética streetwear retro y contracultural,
        seleccionados por 20202020Tienda para un estilo urbano alternativo.
      </p>
      <ProductGrid category="rompevientos" />
    </section>
  );
};
