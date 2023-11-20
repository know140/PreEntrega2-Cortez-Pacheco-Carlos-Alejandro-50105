//La expresion BrowserRouter as Router signfica que renombramos BrowserRouter como Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import Category from "../pages/Category";
import Item from "../pages/Item";
import Contacto from "../pages/Contacto";

const MainRoutes = () => {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/contacto" component={Contacto} /> {/* Nueva ruta para la página de contacto */}
      </Routes>
    </Router>
  );
};

export default MainRoutes;
