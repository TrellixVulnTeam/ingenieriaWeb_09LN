<?php

include("configure.php");

class Conectar{

      //atributos
	  private $hostName;
	  private $usuario;
	  private $clave;
	  private $DBNAME;
	  protected $conexion;

	public function __construct(){  
         $this->hostName=HOTSNAME;
         $this->usuario=USUARIO;
         $this->clave=CLAVE;
         $this->DBNAME=DBNAME;
	}

    public function conexion(){

	  $this->conexion=new PDO("mysql:host=".$this->hostName.";dbname=".$this->DBNAME,$this->usuario,$this->clave);
	  try{
	     $this->conexion->exec("SET NAMES UTF-8");
      }catch(PDOException $exception){
      	 echo "Error".$exception->getMessage();
      }

	  return $this->conexion;
	  
    }

    

}  

?>