// store.js

// Importa las funciones necesarias de Redux para crear el store y aplicar middleware
import { createStore, applyMiddleware } from 'redux';

// Importa el middleware 'redux-thunk' para manejar acciones asíncronas
import thunk from 'redux-thunk';

// Importa el rootReducer que combina todos los reducers de la aplicación
import rootReducer from './reducers';

// Crea el store de Redux al combinar los reducers y aplicar el middleware thunk
const store = createStore(rootReducer, applyMiddleware(thunk));

// Exporta el store para que pueda ser utilizado en otros archivos
export default store;
