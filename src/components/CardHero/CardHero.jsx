// pegando o css
import './CardHero.css';

//exportando para chamar no app
export default function CardHero(props) {
    return (
        <div className="card-hero">
            <div className="elipse-icon">
                {/* estrutura diferente com {'${}'} para o props não virar texto */}
                <i className={`bi ${props.icone} neon-vazado`}></i>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.descricao}</p>
            </div>
        </div>
    )
}