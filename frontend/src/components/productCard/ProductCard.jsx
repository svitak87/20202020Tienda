import "./ProductCard.css"

export const ProductCard = ({ product }) => {
  const { image, name } = product;
  return (
    <article className="card-container">
      <img src={image} alt={name} loading="lazy" decoding="async" />
    </article>
  );
};
