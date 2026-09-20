import { useState, useEffect } from "react";
import "./Evolucao.css";

export default function Evolucao(){
    const [showEgg, setShowEgg] = useState(false);
    const [showBaby, setShowBaby] = useState(false);
    const [showAdult, setShowAdult] = useState(false);

    const [animateLine, setAnimateLine] = useState(false);

    useEffect(()=>{
        const evolutionSection = document.querySelector(".evolution");
        if(!evolutionSection) return;

        const evolutionObserver = new IntersectionObserver((entrie)=>{
            entrie.forEach((entry)=>{
                if(entry.isIntersecting){
                    setShowEgg(true);
                    setAnimateLine(true);

                    setTimeout(()=>{
                        setShowBaby(true);
                    },1200);
                    setTimeout(()=>{
                        setShowAdult(true);
                    },2500);
                    evolutionObserver.unobserve(evolutionSection);
                }
            });
        }, { threshold: 0.5 });
        evolutionObserver.observe(evolutionSection);
        return () => {
            evolutionObserver.disconnect();
        }
    },[]);


    return(
        <section className="evolution">
            <div className="container">

                <div className="text-center mb-5">
                    <h2 className="section-title">Sua Evolução na Jornada</h2>
                    <p className="section-description">
                        Cada habilidade adquirida fortalece seu dragão e aproxima você
                        de novos desafios.
                    </p>
                </div>

                <div className="evolution-wrapper">
                    <div className={`progress-line ${animateLine ? "animate" : ""}`}></div>
                    <div className={`stage egg ${showEgg ? "show" : ""}`}>
                        <img src="/assets/images/EggDragon.png" alt="Ovo de Dragão"/>
                        <h3>Iniciante</h3>
                        <p>Escolha sua jornada.</p>
                    </div>

                    <div className="path"></div>

                    <div className={`stage baby ${showBaby ? "show" : ""}`}>
                        <img src="/assets/images/BabyDragon.png" alt="Filhote de Dragão"/>
                        <h3>Aprendiz</h3>
                        <p>Desenvolva novas habilidades.</p>
                    </div>

                    <div className="path"></div>

                    <div className={`stage adult ${showAdult ? "show" : ""}`}>
                        <img src="/assets/images/AdultDragon.png" alt="Dragão Adulto"/>
                        <h3>Especialista</h3>
                        <p>Conquiste seus objetivos.</p>
                    </div>

                </div>

            </div>
        </section>
    );
}