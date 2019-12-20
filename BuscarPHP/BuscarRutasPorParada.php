<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE, HEAD");
    if(isset($_GET['nombre_parada'])){

        $nombre_parada = urldecode($_GET['nombre_parada']);
        $sql = "SELECT DISTINCT nombre_parada, latitud, longitud, nombre_ruta FROM paradas WHERE nombre_parada LIKE '%".$nombre_parada."%'";
        $conexionBD = new PDO("mysql:host=localhost;dbname=rutasbd","root","");
        $conexionBD->setAttribute(PDO::MYSQL_ATTR_INIT_COMMAND, "SET NAMES 'utf8'");
        $resultado = $conexionBD->query($sql);
        $datos = array();
        foreach ($resultado as $fila) {
            array_push($datos, array(
                'nombre_parada' => $fila['nombre_parada'],
                'latitud' => $fila['latitud'],
                'longitud' => $fila['longitud'],
                'nombre_ruta' => $fila['nombre_ruta'],
            ));
        }
        echo utf8_encode(json_encode($datos));
    }
?>