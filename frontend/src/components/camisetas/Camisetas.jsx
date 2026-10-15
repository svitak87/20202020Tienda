import "./Camisetas.css";
import { ProductGrid } from "../productGrid/ProductGrid.jsx";

export const Camisetas = () => {
  return (
    <section id="camisetas">
      <h2>Camisetas</h2>
      <p className="section-description">
        Camisetas retro seleccionadas dentro de nuestra propuesta de moda retro
        contracultural y estilo urbano alternativo.
      </p>
      <ProductGrid category="camisetas" />
    </section>
  );
};
