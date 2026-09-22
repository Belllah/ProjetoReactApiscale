import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter } from 'react-router-dom';
import Evolucao from './pages/Evolucao/Evolucao.jsx';
import Hero from './pages/Hero/Hero.jsx';
import Sobre from './pages/Sobre/sobre.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <section id='sobre'>
          <Sobre />
        </section>
        <Evolucao />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
