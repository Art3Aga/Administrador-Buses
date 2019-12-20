<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once(APPPATH.'/libraries/REST_Controller.php');
use Restserver\libraries\REST_Controller;

class Bitacora extends REST_Controller {
	public function __construct(){
		header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
		header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
		header("Access-Control-Allow-Origin: *");
		parent::__construct();
		$this->load->database();
		$this->load->helper('date');
	}
	public function RegistrarBitacora_post() {
		$data = $this->post();
		if(!isset($data['id_admin']) OR !isset($data['mensaje']) OR !isset($data['titulo'])
			OR !isset($data['fecha'])) {
			$respuesta = array(
				'error' => TRUE,
				'msm' => 'La informacion enviada no es válida');
			$this->response($respuesta, REST_Controller::HTTP_BAD_REQUEST);
			return;
		}
		$insertar = array(
			'id_admin' => $data['id_admin'],
			'mensaje' => $data['mensaje'],
			'titulo' => $data['titulo'],
			'fecha' => $data['fecha'],
		);
		$this->db->insert('bitacora', $insertar);
		$respuesta = array(
			'error' => FALSE,
			'msm' => 'Bitacora Registrada Correctamente',
			'id_admin' => $data['id_admin'],
			'mensaje' => $data['mensaje'],
			'titulo' => $data['titulo'],
			'fecha' => $data['fecha'],
		);
		$this->response($respuesta);
	}
	public function getBitacora_get(){
		$this->db->order_by('id_bitacora', 'DESC');
		$query = $this->db->get('bitacora');
		$this->response($query->result());
	}
}
