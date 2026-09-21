//importando o css
import "./CardFerramenta.css";

//exportando para chamar no app
export default function CardFerramenta(props) {
    return(
        <div className="col-md-4">
            <div className="feature-card p-4 shadow-sm text-white">
                <div className="icon-box mb-3">
                    <i className={`${props.icone} fa-2x neon-vazado`}></i>
                    </div>
                <h6>{props.titulo}</h6>
                <p>{props.descricao}</p>
            </div>
        </div>
    )
}