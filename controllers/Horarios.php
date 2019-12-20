<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once(APPPATH.'/libraries/REST_Controller.php');
use Restserver\libraries\REST_Controller;

class Horarios extends REST_Controller {
	public function __construct(){
		header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
		header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
		header("Access-Control-Allow-Origin: *");
		parent::__construct();
		$this->load->database();
		$this->load->helper('date');
	}
	public function getParadas_get(){
		$this->db->order_by('id_parada', 'DESC');
		$query = $this->db->get('paradas');
		$this->response($query->result());
	}
	public function guardarHorarios_post(){
		$data = $this->post();	
		if(!isset($data['id_bus']) OR !isset($data['id_ruta']) 
		OR !isset($data['nombre_parada']) OR !isset($data['latitud'])
		OR !isset($data['longitud']) OR !isset($data['horario_ida'])
		OR !isset($data['horario_regreso'])){
			$respuesta = array(
				'error' => TRUE, 
				'mensaje' => "Faltan los datos del recorrido en el post"
			);
			$this->response($respuesta);
		}
		$insertar = array(
			'id_bus' => $data['id_bus'], 
			'id_ruta' => $data['id_ruta'],
			'nombre_parada' => $data['nombre_parada'],
			'latitud' => $data['latitud'],
			'longitud' => $data['longitud'],
			'horario_ida' => $data['horario_ida'],
			'horario_regreso' => $data['horario_regreso'],
		);
		$this->db->insert('horarios', $insertar);
		//ultimo ID de la Tabla Horarios
		$id_horario = $this->db->insert_id();
		$insertBusHorario = array(
			'id_bus' => $data['id_bus'], 
			'id_horario' => $id_horario,
			'id_ruta' => $data['id_ruta'],
		);
		$this->db->insert('bushorario', $insertBusHorario);
		$respuesta = array(
			'error' => FALSE,
			'mensaje' => "Horario Registrado Correctamente",
		);
		$this->response($respuesta);
	}
}
