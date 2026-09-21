import CardFerramenta from "./CardFerramenta";

export default function CardFerramentaConteudo() {
    return(
                <section id="ferramentas" className="overlap-section py-5">
            <div className="container">
                <div className="row g-4 gy-4">

                    {/* Card 1 */}
                    <CardFerramenta 
                        icone="fas fa-chart-bar"
                        titulo="Planeje Suas Ações"
                        descricao="Transforme metas em planos de ação claros, definindo responsáveis, prazos e métodos de execução."
                    />

                    {/* Card 2 */}
                    <CardFerramenta 
                        icone="fas fa-bullseye"
                        titulo="Defina Metas"
                        descricao="Defina objetivos ambiciosos e acompanhe resultados-chave em tempo real para toda a empresa."
                    />

                    {/* Card 3 */}
                    <CardFerramenta 
                        icone="fas fa-chart-pie"
                        titulo="Visualização Fácil"
                        descricao="Visualize indicadores de performance através de gráficos inteligentes para decisões baseadas em dados."
                    />

                    {/* Card 4 */}
                    <CardFerramenta 
                        icone="fas fa-stopwatch"
                        titulo="Gerencie o Tempo"
                        descricao="Controle prazos e marcos críticos de múltiplos projetos em uma visão unificada e intuitiva."
                    />

                    {/* Card 5 */}
                    <CardFerramenta 
                        icone="fas fa-sync-alt"
                        titulo="Sincronia de Time"
                        descricao="Centralize a comunicação estratégica e garanta que cada membro da equipe esteja alinhado aos objetivos do grupo."
                    />

                    {/* Card 6 */}
                    <CardFerramenta 
                        icone="fas fa-user-graduate"
                        titulo="Tenha Seu Plano Pessoal"
                        descricao="Transforme suas ambições em um plano claro, conectando seus sonhos pessoais ao crescimento da empresa."
                    />

                </div>
            </div>
        </section>
    )
}