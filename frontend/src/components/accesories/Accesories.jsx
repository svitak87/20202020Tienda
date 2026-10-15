import "./Accesories.css";
import { ProductGrid } from "../productGrid/ProductGrid.jsx";

export const Accesories = () => {
  return (
    <section id="accesorios">
      <h2>Accesorios</h2>
      <p className="section-description">
        Accesorios vintage para sumar a tu estilo: complementos seleccionados
        con la misma mirada streetwear retro y contracultural.
      </p>
      <ProductGrid category="accesorios" />
    </section>
  );
};
