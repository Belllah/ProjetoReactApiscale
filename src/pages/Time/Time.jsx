import './Time.css';
import membros from '../../data/membros.js';



export default function Time() {
  return (
    <section id="time" className="team-section py-5">
      <div className="container py-5">
        <h3 className="text-center fw-bold mb-5 mt-5 text-white">
          O <span className="text-primary-emphasis">Time</span> por trás do Projeto
        </h3>

        <div className="row g-4 justify-content-center">
          {membros.map((membros, index) => (
            <div className="col-md-4" key={index}>
              <div className="team-card">
                <div className="team-img-box mb-3">
                  <img src={membros.imagem} alt={`Foto de ${membros.nome}`} className="team-img" />
                </div>
                <h5 className="fw-bold mb-1">{membros.nome}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
