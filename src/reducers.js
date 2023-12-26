// reducers.js

// Estado inicial del store de Redux
const initialState = {
  productos: [],   // Lista de productos, inicialmente vacía
  servicios: [],   // Lista de servicios, inicialmente vacía
  usuario: null, // Nuevo estado para almacenar la información del usuario
  errorLogin: null,
};

// Reducer que maneja las acciones y actualiza el estado del store
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Acción en caso de éxito al obtener productos desde la API
    case 'FETCH_PRODUCTOS_SUCCESS':
      // Actualiza el estado añadiendo los productos obtenidos
      return { ...state, productos: action.payload };

    // Acción en caso de éxito al obtener servicios desde la API
    case 'FETCH_SERVICIOS_SUCCESS':
      // Actualiza el estado añadiendo los servicios obtenidos
      return { ...state, servicios: action.payload };

    // Acción en caso de fallo al obtener productos o servicios desde la API
    case 'FETCH_PRODUCTOS_FAILURE':
    case 'FETCH_SERVICIOS_FAILURE':
      // Imprime el mensaje de error en la consola y no realiza cambios en el estado
      console.error(action.payload);
      return state;

    case 'LOGIN_SUCCESS':
      return { ...state, usuario: action.payload, errorLogin: null };
    case 'LOGIN_FAILURE':
      return { ...state, usuario: null, errorLogin: action.payload };
    case 'LOGOUT':
      return { ...state, usuario: null, errorLogin: null };

    // Acción por defecto que simplemente devuelve el estado actual sin cambios
    default:
      return state;
  }
};

// Exporta el reducer para su uso en otros archivos
export default rootReducer;
