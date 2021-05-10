<?php
   header('Content-Type: application/json');
   header('Access-Control-Allow-Origin:*');

   $usuarios=array(
       array(
           'id'=>1,
           'nombre'=>'Lucas',
           'apellidos'=>'Pérez',
           'pais'=>'Chile',
           'ciudad'=>'Valparaíso',
           'fechaNacimiento'=>'12/02/1993'
       ),
       array(
        'id'=>1,
        'nombre'=>'Lucas',
        'apellidos'=>'Pérez',
        'pais'=>'Chile',
        'ciudad'=>'Valparaíso',
        'fechaNacimiento'=>'12/02/1993'
    )
);

$json=json_encode($usuarios);
echo $json;


?>