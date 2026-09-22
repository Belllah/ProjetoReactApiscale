
import FormularioSuporte from '../../components/FormularioSuporte/FormularioSuporte.jsx';
import './Suporte.css';

function Suporte() {
  return (
    <main className="suporte-background text-light">
      <section className="suporte-section container">
        <div className="suporte-card">
          <div className="suporte-intro mb-4">
            <span className="eyebrow">Suporte</span>
            <h1>Como podemos ajudar?</h1>
            <p>
              Envie sua solicitação para nossa equipe. Responderemos assim que possível.
            </p>
          </div>

          <FormularioSuporte />
        </div>
      </section>
    </main>
  );
}

export default Suporte;
