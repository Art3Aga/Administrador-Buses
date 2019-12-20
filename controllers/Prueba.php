<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once(APPPATH.'/libraries/REST_Controller.php');
use Restserver\libraries\REST_Controller;

class Prueba extends REST_Controller {
	public function __construct(){
		header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
		header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
		header("Access-Control-Allow-Origin: *");
		parent::__construct();
		$this->load->database();
	}
	public function getRutas_get(){
		//$this->load->database();
		$query = $this->db->query('SELECT * FROM rutas');
		//echo json_encode($query->result());
		$respuesta = array(
			'error' => false, 
			'rutas' => $query->result_array()
		);
		$this->response($respuesta);
	}
}
