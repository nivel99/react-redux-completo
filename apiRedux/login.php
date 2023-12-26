<?php
header('Access-Control-Allow-Origin: *');
// Verifica las credenciales del usuario (esto es un ejemplo, implementa una lógica más segura en producción)
function authenticateUser($username, $password) {
    // Verifica las credenciales del usuario (aquí puedes consultar una base de datos)
    if ($username === 'usuario' && $password === 'contrasena') {
        // Si las credenciales son válidas, genera un token de forma básica (no uses esto en producción)
        $token = base64_encode(random_bytes(32));

        // Retorna la información del usuario (token, correo, rol)
        return [
            'token' => $token,
            'correo' => $username . '@example.com',
            'rol' => 'usuario_regular'
        ];
    }

    // Retorna nulo si las credenciales no son válidas
    return null;
}

// Comprueba si se ha enviado un formulario de inicio de sesión
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtiene las credenciales del formulario
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Autentica al usuario y obtiene la información
    $userData = authenticateUser($username, $password);

    // Comprueba si la autenticación fue exitosa
    if ($userData !== null) {
        // Retorna la información del usuario como respuesta JSON
        header('Content-Type: application/json');
        echo json_encode($userData);
        exit;
    } else {
        // Retorna un mensaje de error si la autenticación falla
        header('HTTP/1.1 401 Unauthorized');
        echo 'Credenciales inválidas';
        exit;
    }
} else {
    // Retorna un mensaje de error si la solicitud no es de tipo POST
    header('HTTP/1.1 400 Bad Request');
    echo 'Solicitud no válida';
    exit;
}
