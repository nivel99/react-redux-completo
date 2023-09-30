// App.js

// Importa las bibliotecas y funciones necesarias de React y Redux
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from './store'; // Importa el store

// Importa las acciones que llaman a las API de productos y servicios
import { fetchProductos, fetchServicios } from './actions';

// Componente principal de la aplicación
const App = () => {
  // Obtiene el despachador (dispatch) de Redux
  const dispatch = useDispatch();

  // Obtiene los datos de productos y servicios desde el estado global de Redux
  const productos = useSelector((state) => state.productos);
  const servicios = useSelector((state) => state.servicios);

  // Efecto secundario para llamar a las API cuando el componente se monta
  useEffect(() => {
    // Despacha la acción para llamar a la API de productos
    dispatch(fetchProductos());

    // Despacha la acción para llamar a la API de servicios
    dispatch(fetchServicios());
    alert(JSON.stringify(store.getState())); // Alerta con el estado actual del store
  }, [dispatch]); // La dependencia indica que este efecto se ejecutará solo en el montaje y desmontaje del componente

  // Renderiza la interfaz de usuario con los datos obtenidos de las API
  return (
    <div>
      {/* Encabezado para mostrar la lista de productos */}
      <h1>Productos</h1>
      <ul>
        {/* Mapea cada producto y muestra su nombre en una lista */}
        {productos.map((producto) => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>

      {/* Encabezado para mostrar la lista de servicios */}
      <h1>Servicios</h1>
      <ul>
        {/* Mapea cada servicio y muestra su nombre en una lista */}
        {servicios.map((servicio) => (
          <li key={servicio.id}>{servicio.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

// Exporta el componente principal para su uso en otros archivos
export default App;
