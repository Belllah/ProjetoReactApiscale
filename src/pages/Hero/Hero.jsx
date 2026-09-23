import {Link} from 'react-router-dom';
import './Hero.css';
export default function Hero(){
    return(
         <section className="hero-section">
        {/* Usado para os efeitos de partículas no fundo */}
        <div className="particles-bg">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-12 hero-content text-center text-lg-start">

                    <div className="hero-badge">
                        Plataforma Gamificada de Desenvolvimento
                    </div>

                    <h1 className="hero-title">
                        Planeje sua trajetória com
                        <span className="text-highlight"> estratégia </span>
                        e
                        <span className="text-highlight"> clareza</span>.
                    </h1>

                    <p className="hero-subtitle">
                        Evolua suas habilidades através de jornadas personalizadas,
                        conquistas e acompanhamento inteligente.
                    </p>

                    <div className="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start">
                        <Link to="/login" className="btn btn-iniciar">
                            Iniciar Jornada
                        </Link>

                        <Link to="/demonstracao" className="btn btn-demo">
                            Ver Demo
                        </Link>
                    </div>

                </div>
                <div className="col-lg-6 d-none d-lg-flex justify-content-center">

                    <div className="hero-dragons">
                        <div className="dragon-frame mentor-frame"><img src="/assets/images/DragãoMentor.png"
                                className="dragon-mentor" alt="Dragão Mentor"/></div>

                        <div className="dragon-frame apprentice-frame"><img src="/assets/images/DragãoAprendiz.png"
                                className="dragon-apprentice" alt="Dragão Aprendiz"/></div>


                    </div>

                </div>

            </div>
        </div>
        <a href="#sobre" className="scroll-arrow">

            <i className="bi bi-chevron-double-down"></i>

        </a>
    </section>
    );
}