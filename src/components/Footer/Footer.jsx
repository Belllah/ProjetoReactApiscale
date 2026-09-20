import {Link} from "react-router-dom";
import "./Footer.css";
export default function Footer(){
    return(
        <footer>
        <div className="footer-container">

            <div className="footer-brand pointer">

                <img src="/assets/images/logo.png" alt="Logo Apiscale" width="180px" className="mb-3"/>

                <p>
                    Desenvolva habilidades,
                    acompanhe sua evolução
                    e conquiste novas jornadas.
                </p>

            </div>

            <div className="footer-links">

                <h4>Plataforma</h4>

                <a href="#sobre">Sobre</a>
                <a href="#jornadas">Jornadas</a>
                <a href="#ferramentas">Ferramentas</a>
                <Link to="/planos">Planos</Link>

            </div>

            <div className="footer-links">

                <h4>Recursos</h4>

                <Link to="/suporte">Suporte</Link>
            </div>

            <div className="footer-social">

                <h4>Redes Sociais</h4>

                <div className="icons">

                    <i className="bi bi-instagram icon"></i>
                    <i className="bi bi-linkedin icon"></i>
                    <i className="bi bi-github icon"></i>

                </div>

            </div>

        </div>

        <div className="footer-bottom">

            <p>
                © 2026 Apiscale.
                Todos os direitos reservados.
            </p>

        </div>

    </footer>
    );
}