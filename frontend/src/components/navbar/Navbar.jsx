import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo/20202020-tienda-logo.png";
import logoDark from "../../assets/images/logo/20202020-tienda-logo-dark.png";
import { useTheme } from "../../hooks/useTheme.js";

export const Navbar = () => {
  const navRef = useRef(null);
  const collapseRef = useRef(null);
  const togglerRef = useRef(null);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const updateOffset = () => {
      const nav = navRef.current;
      const menu = collapseRef.current;
      if (!nav) return;

      const menuHeight =
        menu && menu.classList.contains("show") ? menu.offsetHeight : 0;
      const height = Math.round(nav.offsetHeight - menuHeight);

      document.documentElement.style.setProperty(
        "--navbar-offset",
        `${height}px`
      );
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);

    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  const handleNavClick = (event) => {
    if (!event.target.closest?.("a")) return;

    const menu = collapseRef.current;
    if (!menu || !menu.classList.contains("show")) return;

    const onMenuHidden = () => {
      menu.removeEventListener("hidden.bs.collapse", onMenuHidden);

      const hash = window.location.hash;
      const targetId = hash.length > 1 ? hash.slice(1) : "";
      const target = targetId ? document.getElementById(targetId) : null;

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    menu.addEventListener("hidden.bs.collapse", onMenuHidden);
    togglerRef.current?.click();
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-custom"
      aria-label="Navegación principal"
      ref={navRef}
    >
      <div className="container-fluid">
        <Link to="/" onClick={handleNavClick}>
          <img
            className="navbar-brand"
            src={isDark ? logoDark : logo}
            alt="Logo de 20202020Tienda"
          />
        </Link>

        <p className="navbar-title">20202020 Tienda</p>

        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            title={isDark ? "Modo claro" : "Modo oscuro"}
          >
            <i
              className={isDark ? "fa-solid fa-sun" : "fa-solid fa-moon"}
              aria-hidden="true"
            ></i>
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Alternar navegación"
            ref={togglerRef}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
          <ul className="navbar-nav" onClick={handleNavClick}>
            <li className="nav-item">
              <NavLink className="nav-link" to="/rompevientos">
                Rompevientos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/camisetas">
                Camisetas
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/accesorios">
                Accesorios
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#eventos">
                Eventos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#ubicacion">
                Ubicación
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
