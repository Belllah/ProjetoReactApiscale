import './Ferramentas.css';
import ferramentas from '../../data/ferramentas.js';

export default function Ferramentas() {
  return (
    <section id="ferramentas" className="overlap-section">
      <div className="container">
        <div className="row g-4 gy-4">
          {ferramentas.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="feature-card p-4 shadow-sm text-white">
                <div className="icon-box mb-3">
                  <i className={`${item.icon} fa-2x neon-vazado`}></i>
                </div>
                <h6>{item.titulo}</h6>
                <p>{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
