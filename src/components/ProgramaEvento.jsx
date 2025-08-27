```javascript
import React from 'react';

const ProgramaEvento = ({ mesas }) => {
  return (
    <div className="programa-evento">
      {mesas.map((mesa, index) => (
        <div key={index} className="mesa">
          <div className="mesa-info">
            <h3>{mesa.nombre}</h3>
            <p>{mesa.descripcion}</p>
          </div>
          <div className="academicos-lista">
            {mesa.academicos.map((academico, idx) => (
              <div key={idx} className="academico">
                {/* Mostrar nombre(s) del académico */}
                <div>
                  {Array.isArray(academico.nombre)
                    ? academico.nombre.join(', ')
                    : academico.nombre}
                </div>
                {/* Mostrar ponencia si existe */}
                {academico.ponencia && (
                  <div className="ponencia">
                    <strong>Ponencia:</strong> {academico.ponencia}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgramaEvento;
```