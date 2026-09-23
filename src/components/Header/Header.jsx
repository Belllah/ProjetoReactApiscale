import {Link} from "react-router-dom";
import './Header.css';
export default function Header(){
    return(
        <header>
        <nav className="navbar navbar-expand-lg sticky-menu" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
                    <img src="/assets/images/logo.png" alt="Logo Apiscale"/>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto gap-lg-3">
                        <li className="nav-item"><Link className="nav-link" to="/">Início</Link></li>
                        <li className="nav-item"><a className="nav-link" href="#sobre">Sobre</a></li>
                        <li className="nav-item"><a className="nav-link" href="#ferramentas">Ferramentas</a></li>
                        <li className="nav-item"><a className="nav-link" href="#jornadas">Jornadas</a></li>
                        <li className="nav-item"><Link className="nav-link" to="/suporte">Suporte</Link>
                        </li>
                        <li className="nav-item"><Link className="nav-link" to="./assets/pages/planos.html">Planos</Link>
                        </li>
                    </ul>
                    <Link to="/cadastro"><button type="button" className="btn btn-comecar fw-bold">Começar
                            Agora</button></Link>
                </div>
            </div>
        </nav>
    </header>
    );
}
// onClick={(e) => { e.preventDefault(); document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' }); }}