import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter } from 'react-router-dom';
import Evolucao from './pages/Evolucao/Evolucao.jsx';
import Hero from './pages/Hero/Hero.jsx';
import CardHeroConteudo from './components/CardHero/CardHeroConteudo.jsx';
import CardFerramentaConteudo from './components/CardFerramenta/CardFerramentaConteudo.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <CardHeroConteudo />
        <CardFerramentaConteudo />
        <Evolucao />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
