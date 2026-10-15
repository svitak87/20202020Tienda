import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home.jsx";
import { CategoryPage } from "./pages/category/CategoryPage.jsx";
import { categories } from "./pages/category/categories.js";
import { ScrollManager } from "./components/scrollManager/ScrollManager.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={categories.rompevientos.path}
          element={<CategoryPage category={categories.rompevientos} />}
        />
        <Route
          path={categories.camisetas.path}
          element={<CategoryPage category={categories.camisetas} />}
        />
        <Route
          path={categories.accesorios.path}
          element={<CategoryPage category={categories.accesorios} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
