import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Evolucao from './pages/Evolucao/Evolucao.jsx';
import Estatisticas from './pages/Estatisticas/Estatisticas.jsx';
import Ferramentas from './pages/Ferramentas/Ferramentas.jsx';
import Jornadas from './pages/Jornadas/Jornadas.jsx';
import Hero from './pages/Hero/Hero.jsx';
import Sobre from './pages/Sobre/sobre.jsx';
import Suporte from './pages/Suporte/Suporte.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import Time from './pages/Time/Time.jsx';

function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Estatisticas />
      <Ferramentas />
      <Evolucao />
      <Jornadas />
      <Time />
    </>
  );
}

function AppRoutes() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/cadastro';

  return (
    <>
      {!isAuthPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
