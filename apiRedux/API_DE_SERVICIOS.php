<?php
header('Access-Control-Allow-Origin: *');

// Supongamos que esta es tu API de servicios
$servicios = [
    ['id' => 1, 'nombre' => 'Servicio 1'],
    ['id' => 2, 'nombre' => 'Servicio 2'],
    // ... otros servicios
];

header('Content-Type: application/json');
echo json_encode($servicios);

?>
