// App.js

// Importa las bibliotecas y funciones necesarias de React y Redux
import React, { useEffect, useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from './store'; // Importa el store

// Importa las acciones que llaman a las API de productos y servicios
import { fetchProductos, fetchServicios, login, logout } from './actions';

// Componente principal de la aplicación
const App = () => {
  // Obtiene el despachador (dispatch) de Redux
  const dispatch = useDispatch();

  // Obtiene los datos de productos y servicios desde el estado global de Redux
  const productos = useSelector((state) => state.productos);
  const servicios = useSelector((state) => state.servicios);
  const usuario = useSelector((state) => state.usuario);
  const errorLogin = useSelector((state) => state.errorLogin);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Dispatch de la acción para iniciar sesión
    dispatch(login(username, password));
  };

  const handleLogout = () => {
    // Dispatch de la acción para cerrar sesión
    dispatch(logout());
  };

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
      {usuario ? (
        // Mostrar contenido cuando el usuario está autenticado
        <div>
          <h1>Bienvenido, {usuario.correo} ({usuario.rol})</h1>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        // Mostrar formulario de inicio de sesión cuando el usuario no está autenticado
        <div>
          <h1>Inicio de Sesión</h1>
          {errorLogin && <p style={{ color: 'red' }}>{errorLogin}</p>}
          <label>
            Usuario:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Contraseña:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
      )}

      <h1>Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
      <h1>Servicios</h1>
      <ul>
        {servicios.map((servicio) => (
          <li key={servicio.id}>{servicio.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

// Exporta el componente principal para su uso en otros archivos
export default App;
