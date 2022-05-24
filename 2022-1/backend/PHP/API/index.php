<?php

  $method = $_SERVER['REQUEST_METHOD'];
  $request = explode("/", substr(@$_SERVER['PATH_INFO'], 1));


  switch ($method) {
    case 'PUT':
       
      break;
    case 'POST':
       /*
         {
          "name":"producto1",
          "price":2000,
          "description":"aqui estamos",
          "category_id":1
        }
       */
       include_once("product/create.php");

      break;
    case 'GET':
       include_once("product/read.php");  
      break;
    default:
      handle_error($request);  
      break;
  }


    


?>