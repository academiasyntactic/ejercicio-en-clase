import React, { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [estado, setEstado] = useState(null);

  useEffect(() => {
    const funcion = async () => {
      const respuesta = await fetch("https://fakestoreapi.com/products");
      const datos = await respuesta.json();
      setEstado(datos);
    };
    funcion();
  }, []);

  return (
    <div className="flex flex-wrap gap-10 fondo">
      <h1>Los que tuvieron ganancias:</h1>
      {estado &&
        estado.map(
          (pan) =>
            pan.price < 100 && (
              <div>
                <img className="w-48" src={pan.image} alt="" />
                <h2>{pan.price}</h2>
              </div>
            )
        )}
    </div>
  );
};

export default App;
