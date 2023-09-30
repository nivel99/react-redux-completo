// index.js

// Importa las bibliotecas necesarias de React y Redux para renderizar la aplicación
import React from 'react';
import ReactDOM from 'react-dom';

// Importa el componente Provider de React-Redux y el store de Redux
import { Provider } from 'react-redux';
import store from './store';

// Importa el componente principal de la aplicación
import App from './App';

// Renderiza la aplicación en el elemento con el ID 'root' en el HTML
ReactDOM.render(
  // Envuelve la aplicación con el Provider para que tenga acceso al store de Redux
  <Provider store={store}>
    {/* Renderiza el componente principal de la aplicación */}
    <App />
  </Provider>,
  // Encuentra el elemento con el ID 'root' en el HTML
  document.getElementById('root')
);
