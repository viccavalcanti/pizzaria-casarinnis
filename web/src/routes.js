import { Route, Routes } from 'react-router-dom';

import './styles/global.css';

import Sidebar from './components/sidebar';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Pizzaria from './pages/pizzaria';
import Home from './pages/home';

const MainRoutes = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizzaria/:id" element={<Pizzaria />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </>
  )
}

export default MainRoutes;