import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter } from 'react-router-dom';
import Evolucao from './pages/Evolucao/Evolucao.jsx';
function App() {
  return (
    <>
       <BrowserRouter>

      <Header />
      <Evolucao />
   
    <Footer />
    </BrowserRouter>
      </>
  );
}

export default App;
