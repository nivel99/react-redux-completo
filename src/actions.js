// actions.js

// Acción para llamar a la API de productos de manera asíncrona
export const fetchProductos = () => async (dispatch) => {
    try {
      // Realiza una solicitud a la API de productos
      const response = await fetch('http://localhost/apiRedux/API_DE_PRODUCTOS.php');
      
      // Obtiene los datos de la respuesta en formato JSON
      const data = await response.json();
      
      // Despacha una acción de éxito con los datos obtenidos
      dispatch({ type: 'FETCH_PRODUCTOS_SUCCESS', payload: data });
    } catch (error) {
      // En caso de error, despacha una acción de fallo con el mensaje de error
      dispatch({ type: 'FETCH_PRODUCTOS_FAILURE', payload: error.message });
    }
  };
  
  // Acción para llamar a la API de servicios de manera asíncrona
  export const fetchServicios = () => async (dispatch) => {
    try {
      // Realiza una solicitud a la API de servicios
      const response = await fetch('http://localhost/apiRedux/API_DE_SERVICIOS.php');
      
      // Obtiene los datos de la respuesta en formato JSON
      const data = await response.json();
      
      // Despacha una acción de éxito con los datos obtenidos
      dispatch({ type: 'FETCH_SERVICIOS_SUCCESS', payload: data });
    } catch (error) {
      // En caso de error, despacha una acción de fallo con el mensaje de error
      dispatch({ type: 'FETCH_SERVICIOS_FAILURE', payload: error.message });
    }
  };
  
  export const login = (username, password) => async (dispatch) => {
    try {
      const response = await fetch('http://localhost/apiRedux/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&password=${password}`,
      });
  
      if (response.ok) {
        const userData = await response.json();
        dispatch({ type: 'LOGIN_SUCCESS', payload: userData });
      } else {
        const errorData = await response.text();
        dispatch({ type: 'LOGIN_FAILURE', payload: errorData });
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };
  
  export const logout = () => (dispatch) => {
    // Puedes agregar lógica de cierre de sesión aquí si es necesario
    dispatch({ type: 'LOGOUT' });
  };