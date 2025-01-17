import React, { useState, useEffect } from 'react';

const AdminPage = () => {
  const [citas, setCitas] = useState([]);
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    // Realizar solicitud al servidor para obtener información de citas y consultas
    fetch('/admin/pedidos')
      .then((response) => response.json())
      .then((data) => {
        setCitas(data.citas);
        setConsultas(data.consultas);
      })
      .catch((error) => console.error('Error al obtener datos:', error));
  }, []);

  return (
    <div>
      <div>
        {citas.map((cita) => (
          // Renderizar información de la cita
          <div key={cita.id}>
            {/* ... */}
          </div>
        ))}
      </div>
      <div>
        {consultas.map((consulta) => (
          // Renderizar información de la consulta
          <div key={consulta.id}>
            {/* ... */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
