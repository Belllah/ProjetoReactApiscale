import './sobre.css';

export default function Sobre() {
  return (
    <section className="about-cards-background">
      
      {/* Seção Sobre */}
      <section id="sobre" className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h6 className="fw-bold text-uppercase mb-3 text-style">O Conceito</h6>
              <h2 className="display-5 fw-bold mb-4 text-white">
                A Sincronia da <span className="text-highlight">Colmeia</span> com a Sabedoria do <span className="text-highlight">Dragão</span>
              </h2>

              <div className="concept-box mb-4">
                <p className="mb-4">
                  O <strong>Apiscale</strong> une dois mundos fundamentais para o sucesso de qualquer negócio:
                </p>

                <div className="d-flex gap-3 mb-3">
                  <i className="bi bi-hexagon-fill text-primary-emphasis fs-3"></i>
                  <p>
                    <strong>APIS (Colmeia):</strong> Representa a colaboração e organização. Como em uma colmeia, focamos na sincronia do time para alcançar resultados coletivos extraordinários.
                  </p>
                </div>

                <div className="d-flex gap-3">
                  <i className="fas fa-dragon text-primary-emphasis fs-3"></i>
                  <p>
                    <strong>SCALE (Escama):</strong> Remete às escamas do dragão. Simboliza a sabedoria acumulada, a proteção estratégica e a força individual necessária para voar alto.
                  </p>
                </div>
              </div>

              <p>
                Nosso objetivo é transformar empresas em organismos eficientes e colaboradores em líderes sábios.
              </p>
            </div>

            <div className="col-lg-6 text-center">
              <div className="about-img-box">
                <img
                  src="/assets/images/sobreImg.webp"
                  alt="Dragão de exemplo para a imagem"
                  className="img-fluid floating-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
