<?php
header('Access-Control-Allow-Origin: *');

// Supongamos que esta es tu API de productos
$productos = [
    ['id' => 1, 'nombre' => 'Producto 1'],
    ['id' => 2, 'nombre' => 'Producto 2'],
    // ... otros productos
];

header('Content-Type: application/json');
echo json_encode($productos);

?>
