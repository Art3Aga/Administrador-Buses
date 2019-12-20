<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once(APPPATH.'/libraries/REST_Controller.php');
use Restserver\libraries\REST_Controller;

class Paradas extends REST_Controller {
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
	public function getParadasDistinct_get(){
		//$this->db->distinct();
		//$this->db->order_by('id_parada', 'DESC');
		$query = $this->db->query('SELECT nombre_parada, latitud, longitud, nombre_ruta FROM paradas GROUP BY nombre_parada ORDER BY id_parada DESC');
		$this->response($query->result());
	}
	public function getDatosParadaPorNombreParada_get($nombre_parada = ""){
		$this->db->order_by('id_parada', 'DESC');
		$this->db->like('nombre_parada', urldecode($nombre_parada));
		$query = $this->db->get('paradas');
		$this->response($query->row());
	}
	public function buscarParadaPorRuta_get($nombre_ruta = "")
	{
		$query = $this->db->query("SELECT * FROM paradas WHERE nombre_ruta = '".urldecode($nombre_ruta)."' GROUP BY nombre_parada ORDER BY id_parada DESC");
	    //$this->db->order_by('id_parada', 'DESC');
		//$this->db->like('nombre_ruta', urldecode($nombre_ruta));
		//$query = $this->db->get('paradas');
		$this->response($query->result());
	}
	public function guardarParada_post(){
		$data = $this->post();	
		if(!isset($data['nombre_ruta']) OR !isset($data['nombre_parada']) 
		OR !isset($data['latitud']) OR !isset($data['longitud'])){
			$respuesta = array(
				'error' => TRUE, 
				'mensaje' => "Faltan los datos del recorrido en el post"
			);
			$this->response($respuesta);
		}
		$insertar = array(
			'nombre_ruta' => $data['nombre_ruta'], 
			'nombre_parada' => $data['nombre_parada'],
			'latitud' => $data['latitud'],
			'longitud' => $data['longitud'],
		);
		$this->db->insert('paradas', $insertar);
		$respuesta = array(
			'error' => FALSE,
			'mensaje' => "Parada '".$data['nombre_parada']."' Registrada Correctamente",
		);
		$this->response($respuesta);
	}
}
