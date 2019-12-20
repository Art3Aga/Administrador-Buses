<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once(APPPATH.'/libraries/REST_Controller.php');
use Restserver\libraries\REST_Controller;

class Comentarios extends REST_Controller {
	public function __construct(){
		header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
		header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
		header("Access-Control-Allow-Origin: *");
		parent::__construct();
		$this->load->database();
		$this->load->helper('date');
	}
	public function getComentarios_get(){
		$query = $this->db->query('SELECT * FROM comentarios ORDER BY id_comentario DESC');
		$this->response($query->result());
	}
	public function getUsuarios_get(){
		$query = $this->db->query('SELECT DISTINCT nombre_usuario FROM comentarios');
		$this->response($query->result());
	}
	public function buscarComentarioPorUsuario_get($usuario = ""){
		$query = $this->db->query("SELECT * FROM comentarios WHERE nombre_usuario LIKE '%".urldecode($usuario)."%' ORDER BY id_comentario DESC");
		$this->response($query->result());
	}
	public function buscarComentarioPorTexto_get($texto = ""){
		$query = $this->db->query("SELECT * FROM comentarios WHERE texto LIKE '%".urldecode($texto)."%' ORDER BY id_comentario DESC");
		$this->response($query->result());
	}
	public function buscarComentarioPorFecha_post(){
		$data = $this->post();
		if(!isset($data['fecha'])) {
			$resultado = array(
				'error' => TRUE, 
				'mensaje' => 'Faltan datos para la consulta', 
			);
			$this->response($resultado);
		}
		$this->db->order_by('id_comentario', 'DESC');
		$this->db->like('fecha', $data['fecha']);
		$query = $this->db->get('comentarios');
		$this->response($query->result());
	}
	public function guardarComentario_post(){
		$data = $this->post();	
		if(!isset($data['texto']) || !isset($data['nombre_usuario'])){
			$respuesta = array(
				'error' => TRUE, 
				'mensaje' => "Faltan los datos del comentario en el post"
			);
			$this->response($respuesta);
		}
		$insertar = array(
			'texto' => $data['texto'], 
			'nombre_usuario' => $data['nombre_usuario'],
			'fecha' => $data['fecha'],
		);
		$this->db->insert('comentarios', $insertar);
		$this->response($insertar);
	}
	public function Fecha_get(){
		$date = date('m/d/Y H:i:s');
		$this->response($date);
	}
}
