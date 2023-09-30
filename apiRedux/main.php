<?php
header('Access-Control-Allow-Origin: *');

// Función para realizar una solicitud a la API
function callApi($url) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);
    return json_decode($response, true);
}

// Llama a la API de productos
$productosApiUrl = 'API_DE_PRODUCTOS.php';
$productos = callApi($productosApiUrl);

// Llama a la API de servicios
$serviciosApiUrl = 'API_DE_SERVICIOS.php';
$servicios = callApi($serviciosApiUrl);

// Ahora, $productos y $servicios contienen los datos de las API

// Puedes imprimir o manipular los datos según tus necesidades
echo "Productos:\n";
print_r($productos);

echo "Servicios:\n";
print_r($servicios);

?>
