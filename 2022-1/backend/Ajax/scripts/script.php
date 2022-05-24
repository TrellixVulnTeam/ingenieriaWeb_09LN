<?php
header('Access-Control-Allow-Origin:*');  
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");


class Producto {
    public $id = 0;
    public $nombre = "";
    public $imagen="";
    public $valor = "";
}

$producto = new Producto;
$producto->nombre = "producto 1";
$producto->imagen="1.jpg";
$producto->valor="2000";

echo json_encode($producto);

  
?>