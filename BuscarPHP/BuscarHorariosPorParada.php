<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE, HEAD");
    if(isset($_GET['nombre_parada'])){

        $nombre_parada = urldecode($_GET['nombre_parada']);
        $nombre_ruta = urldecode($_GET['nombre_ruta']);
    $sql = "SELECT horarios.horario_ida, horarios.horario_regreso, buses.nombre_bus, buses.nombre_motorista, buses.placa, buses.imgPath FROM bushorario INNER JOIN horarios ON horarios.id_horario = bushorario.id_horario INNER JOIN buses ON buses.id_bus = bushorario.id_bus WHERE horarios.nombre_parada = '{$nombre_parada}' AND buses.nombre_ruta = '{$nombre_ruta}'";
        $conexionBD = new PDO("mysql:host=localhost;dbname=rutasbd","root","");
        $conexionBD->setAttribute(PDO::MYSQL_ATTR_INIT_COMMAND, "SET NAMES 'utf8'");
        $resultado = $conexionBD->query($sql);
        $datos = array();
        foreach ($resultado as $fila) {
            array_push($datos, array(
                'nombre_bus' => $fila['nombre_bus'],
                'nombre_motorista' => $fila['nombre_motorista'],
                'placa' => $fila['placa'],
                'imgPath' => $fila['imgPath'],
                'horario_ida' => $fila['horario_ida'],
                'horario_regreso' => $fila['horario_regreso'],

            ));
        }
        echo utf8_encode(json_encode($datos));
    }
?>