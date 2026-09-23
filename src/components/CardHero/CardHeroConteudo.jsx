import CardHero from './CardHero.jsx';

export default function CardHeroConteudo() {
    return (
        <section className="Cards-hero" >
            <div className="container">
                <div className="row g-4 justify-content-center">

                    {/* card 1 */}
                    <div className="col-md-4 text-center">
                        <CardHero
                            icone="bi-bar-chart-fill"
                            titulo="Acompanhamento de Progresso"
                            descricao="Visualize o avanço de cada colaborador em tempo real através de métricas, níveis de evolução e indicadores personalizados para cada jornada." />
                    </div>

                    {/* card 2 */}
                    <div className="col-md-4 text-center">
                        <CardHero
                            icone="bi-calendar-check-fill"
                            titulo="Trilhas Personalizadas"
                            descricao="Monte jornadas adaptáveis para diferentes cargos, equipes e objetivos, permitindo que a empresa evolua seus talentos de forma estratégica." />
                    </div>

                    {/* card 3 */}
                    <div className="col-md-4 text-center">
                        <CardHero
                            icone="bi-shield-lock-fill"
                            titulo="Gestão Segura de Dados"
                            descricao="Centralize informações, avaliações e desempenho dos colaboradores em um ambiente moderno, protegido e acessível para gestores e equipes." />
                    </div>
                </div>
            </div>
        </section >
    )
}