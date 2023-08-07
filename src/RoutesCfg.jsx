import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import Logement from "./pages/Logement";
import PageNotFound from "./pages/PageNotFound";

function RoutesConfig() {
  return (
    <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/accueil" element={<Home/>} />
          <Route exact path="/logement/:id" element={<Logement/>} />
          <Route path="/a-propos" element={<APropos/>} />
          <Route path="*" element={<PageNotFound/>} />
    </Routes>
  );
}

export default RoutesConfig;