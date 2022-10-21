import './App.css';
import Home from"./components/Home.js"
import ListadoProductos from './components/ListadoProductos';
import CatalogoProductos from './components/CatalogoProductos';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/listado" element={<ListadoProductos/>} />
        <Route path="/catalogo" element={<CatalogoProductos/>} />
      </Routes>
    </Router>
  );
}

export default App;
