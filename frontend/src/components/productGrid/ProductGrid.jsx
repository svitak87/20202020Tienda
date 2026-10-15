import { products } from "../../assets/databases/products/products.js";
import { ProductCard } from "../productCard/ProductCard.jsx";

export const ProductGrid = ({ category }) => {
  const categoryProducts = products.filter(
    (product) => product.category === category,
  );

  return (
    <div className="products-grid">
      {categoryProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
