<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once(APPPATH.'/libraries/REST_Controller.php');
use Restserver\libraries\REST_Controller;

class Login extends REST_Controller {

	public function __construct(){
		header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
		header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
		header("Access-Control-Allow-Origin: *");
		parent::__construct();
		$this->load->database();
		$this->load->helper('date');
	}

	public function VerificarCuenta_post(){
		$data = $this->post();
		if(!isset($data['usuario']) OR !isset($data['clave'])) {
			$respuesta = array(
				'error' => TRUE,
				'mensaje' => 'La informacion enviada no es válida');
			$this->response($respuesta, REST_Controller::HTTP_BAD_REQUEST);
			return;
		}
		$condicion = array(
			'usuario' => $data['usuario'],
			'clave' => $data['clave'],
		);
		$query = $this->db->get_where('login', $condicion);
		$usuario = $query->row();
		if(!isset($usuario)) {
			$respuesta = array(
				'error' => TRUE,
				'mensaje' => 'Usuario o Clave son Incorrectos');
			$this->response($respuesta);
			return;
		}
		//Existe Usuario y Clave en BD
		$this->response($usuario);
		//$token = bin2hex(openssl_random_pseudo_bytes(20));
		//$token = hash('ripemd160', $data['usuario']);
		//$this->response($token);
	}
	public function RegistrarUsuario_post(){
		$data = $this->post();
		if(!isset($data['usuario']) OR !isset($data['clave'])) {
			$respuesta = array(
				'error' => TRUE,
				'mensaje' => 'La informacion enviada no es válida');
			$this->response($respuesta, REST_Controller::HTTP_BAD_REQUEST);
			return;
		}
		$condicion = array(
			'usuario' => $data['usuario'],
			'clave' => $data['clave'],
		);
		$query = $this->db->get_where('login', $condicion);
		$usuario = $query->row();
		if(isset($usuario)) {
			//Existe Usuario y Clave en BD
			$respuesta = array(
				'error' => TRUE, 
				'mensaje' => 'Cuenta ya Existente'
			);
			$this->response($respuesta);
			return;
		}
		//Se puede Registrar Usuario y Clave
		$insertar = array(
			'usuario' => $data['usuario'],
			'clave' => $data['clave'],
		);
		$this->db->insert('login', $insertar);
		$respuesta = array(
			'error' => FALSE,
			'mensaje' => 'Cuenta Registrada Correctamente',
			'usuario' => $data['usuario'],
			'clave' => $data['clave'],
		);
		$this->response($respuesta);
	}
	public function getUsuarios_get(){
		$this->db->order_by('id_admin', 'DESC');
		$query = $this->db->get('login');
		$this->response($query->result());
	}
}
