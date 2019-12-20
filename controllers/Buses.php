<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once(APPPATH.'/libraries/REST_Controller.php');
use Restserver\libraries\REST_Controller;

class Buses extends REST_Controller {
	public function __construct(){
		header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
		header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
		header("Access-Control-Allow-Origin: *");
		parent::__construct();
		$this->load->database();
		$this->load->helper('date');
	}
	public function getBuses_get(){
		$this->db->order_by('id_bus', 'DESC');
		$query = $this->db->get('buses');
		$this->response($query->result());
	}
	public function buscarBusPorRuta_get($nombre_ruta = ""){
		$this->db->order_by('id_bus', 'DESC');
		$this->db->like('nombre_ruta', urldecode($nombre_ruta));
		$condicion = array('nombre_ruta' => urldecode($nombre_ruta) );
		$query = $this->db->get('buses');
		$this->response($query->result());
	}
	public function buscarBusPorNombre_get($nombre_bus = ""){
		$this->db->order_by('id_bus', 'DESC');
		$this->db->like('nombre_bus', $nombre_bus);
		$query = $this->db->get('buses');
		$this->response($query->result());
	}
	public function guardarBus_post(){
		$data = $this->post();	
		if(!isset($data['nombre_bus']) OR !isset($data['nombre_motorista']) OR !isset($data['placa']) 
		OR !isset($data['fecha_creacion']) OR !isset($data['fecha_actualizacion'])
		OR !isset($data['imgPath']) OR !isset($data['id_ruta']) OR !isset($data['nombre_ruta'])){
			$respuesta = array(
				'error' => TRUE, 
				'mensaje' => "Faltan los datos del bus en el post"
			);
			$this->response($respuesta);
		}
		$insertar = array(
			'nombre_bus' => $data['nombre_bus'], 
			'nombre_motorista' => $data['nombre_motorista'],
			'placa' => $data['placa'],
			'fecha_creacion' => $data['fecha_creacion'],
			'fecha_actualizacion' => $data['fecha_actualizacion'],
			'imgPath' => $data['imgPath'],
			'nombre_ruta' => $data['nombre_ruta'],
		);
		$this->db->insert('buses', $insertar);
		//ultimo ID 
		$id_bus = $this->db->insert_id();
		$insertRutaBus = array(
			'id_ruta' => $data['id_ruta'], 
			'id_bus' => $id_bus,
		);
		$this->db->insert('rutabus', $insertRutaBus);
		$respuesta = array(
			'mensaje' => "Bus '".$data['nombre_bus']."' Registrado Correctamente",
		);
		$this->response($respuesta);
	}
	public function deleteBus_post(){
		$data = $this->post();
		if(!isset($data['id_bus'])){
			$respuesta = array(
				'error' => TRUE, 
				'mensaje' => "Faltan los datos del bus en el post"
			);
			$this->response($respuesta);
		}
		$condicion = array('id_bus' => $data['id_bus']);
		$this->db->delete('buses', $condicion);
		$respuesta = array(
			'error' => FALSE, 
			'mensaje' => "Bus Eliminado Correctamente"
		); 
		$this->response($respuesta);
	}
}
