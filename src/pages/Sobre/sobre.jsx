import './sobre.css';

export default function Sobre() {
  return (
    <section className="about-cards-background">
      <section className="Cards-hero">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="d-flex justify-content-center col-md-4 col-12 text-center mb-3">
              <div className="card card-hero h-100">
                <div className="elipse-icon">
                  <i className="bi bi-bar-chart-fill neon-vazado"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Acompanhamento de Progresso</h5>
                  <p className="card-text">
                    Visualize o avanço de cada colaborador em tempo real
                    através de métricas, níveis de evolução e indicadores
                    personalizados para cada jornada.
                  </p>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center col-md-4 col-12 text-center mb-3">
              <div className="card card-hero h-100">
                <div className="elipse-icon">
                  <i className="bi bi-calendar-check-fill neon-vazado"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Trilhas Personalizadas</h5>
                  <p className="card-text">
                    Monte jornadas adaptáveis para diferentes cargos,
                    equipes e objetivos, permitindo que a empresa evolua
                    seus talentos de forma estratégica.
                  </p>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center col-md-4 col-12 text-center mb-3">
              <div className="card card-hero h-100">
                <div className="elipse-icon">
                  <i className="bi bi-shield-lock-fill neon-vazado"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Gestão Segura de Dados</h5>
                  <p className="card-text">
                    Centralize informações, avaliações e desempenho dos
                    colaboradores em um ambiente moderno, protegido e
                    acessível para gestores e equipes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
