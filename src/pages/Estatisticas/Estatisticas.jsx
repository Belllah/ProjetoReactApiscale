import { useState, useEffect } from 'react';
import './Estatisticas.css';
import estatisticas from '../../data/estatisticas';


export default function Estatisticas() {
  const [contadores, setContadores] = useState(estatisticas.map(() => 0));

  useEffect(() => {
    const intervalos = estatisticas.map((item, index) => {
      return setInterval(() => {
        setContadores((prev) => {
          const novos = [...prev];
          if (novos[index] < item.alvo) {
            novos[index] = novos[index] + 1;
          }
          return novos;
        });
      }, 30);
    });

    return () => intervalos.forEach((id) => clearInterval(id));
  }, []);

  return (
    <section className="stats">
      <div className="container">
        {estatisticas.map((item, index) => (
          <div className="stat-card" key={index}>
            <span>{contadores[index]}%</span>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
