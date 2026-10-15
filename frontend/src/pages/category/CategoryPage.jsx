import { Link } from "react-router-dom";
import "./CategoryPage.css";
import { Navbar } from "../../components/navbar/Navbar.jsx";
import { Footer } from "../../components/footer/Footer.jsx";
import { WhatsApp } from "../../components/whatsapp/Whatsapp.jsx";
import { ProductGrid } from "../../components/productGrid/ProductGrid.jsx";
import { Seo } from "../../components/seo/Seo.jsx";

export const CategoryPage = ({ category }) => {
  return (
    <>
      <Seo
        title={category.title}
        description={category.description}
        path={category.path}
        breadcrumbs={[
          { name: "Inicio", path: "/" },
          { name: category.heading, path: category.path },
        ]}
      />
      <header className="header" id="top">
        <Navbar />
      </header>
      <main className="category-page">
        <nav className="category-breadcrumb" aria-label="Migas de pan">
          <Link to="/">Inicio</Link>
          <span aria-hidden="true"> / </span>
          <span>{category.heading}</span>
        </nav>
        <h1>{category.heading}</h1>
        <p className="section-description">{category.copy}</p>
        <ProductGrid category={category.slug} />
      </main>
      <footer>
        <Footer />
      </footer>
      <WhatsApp />
    </>
  );
};
