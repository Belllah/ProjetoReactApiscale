import './Jornadas.css';
import jornadas from '../../data/jornadas.js';

export default function Jornadas() {
  return (
    <section id="jornadas" className="secao-trilhas py-5">
      <div className="container-fluid">

        {/* Topo */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="subtitulo-jornada d-inline-block mb-3">
              Jornadas Inteligentes
            </span>
            <h2 className="titulo-jornada mb-4">
              Crie trilhas personalizadas para desenvolver equipes com estratégia
            </h2>
            <p className="descricao-jornada">
              As jornadas apresentadas são apenas exemplos das possibilidades da plataforma.
              No Apiscale, cada empresa pode criar trilhas únicas conforme suas necessidades,
              objetivos e o momento de evolução da equipe.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="container-trilhas">
          {jornadas.map((jornada, index) => (
            <div className={`card-trilha ${jornada.lado}`} key={index}>
              <div className="area-dragao">
                <img src={jornada.imagem} alt={jornada.alt} />
              </div>
              <div className="conteudo-trilha">
                <span className="nivel">{jornada.nivel}</span>
                <h2>{jornada.titulo}</h2>
                <p>{jornada.descricao}</p>
                <button>Explorar Trilha</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
