<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once(APPPATH.'/libraries/REST_Controller.php');
use Restserver\libraries\REST_Controller;

class Rutas extends REST_Controller {
	public function __construct(){
		header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
		header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
		header("Access-Control-Allow-Origin: *");
		parent::__construct();
		$this->load->database();
		$this->load->helper('url');
	}
	public function getRutas_get(){
		$this->db->order_by('id_ruta', 'DESC');
		$query = $this->db->get('rutas');
		// $query = $this->db->query('SELECT * FROM rutas ORDER BY id_ruta DESC');
		$this->response($query->result());
	}
	public function buscarRutaPorNombre_get($nombre_ruta = ""){
		/*$query = $this->db->query("SELECT * FROM rutas WHERE nombre_ruta LIKE '%".urldecode($nombre_ruta)."%' ORDER BY id_ruta DESC");
		$this->response($query->result());*/

		$this->db->order_by('id_ruta', 'DESC');
		$this->db->like('nombre_ruta', urldecode($nombre_ruta));
		$query = $this->db->get('rutas');
		$this->response($query->result());
	}
	public function buscarRutaPorID_get($id_ruta = ""){
		/*$query = $this->db->query("SELECT * FROM rutas WHERE id_ruta LIKE '%".urldecode($id_ruta)."%' ORDER BY id_ruta DESC");
		$this->response($query->result());*/
		$this->db->order_by('id_ruta', 'DESC');
		$this->db->like('id_ruta', urldecode($id_ruta));
		$query = $this->db->get('rutas');
		$this->response($query->result());
	}
	public function guardarRuta_post(){
		$data = $this->post();	
		if(!isset($data['nombre_ruta']) || !isset($data['nombre_abreviado']) || !isset($data['precio']) 
		|| !isset($data['unidades']) || !isset($data['hora_inicio']) || !isset($data['hora_final'])
		|| !isset($data['fecha_creacion']) || !isset($data['fecha_actualizacion'])){
			$respuesta = array(
				'error' => TRUE, 
				'mensaje' => "Faltan los datos de la ruta en el post"
			);
			$this->response($respuesta);
		}
		$insertar = array(
			'nombre_ruta' => $data['nombre_ruta'], 
			'nombre_abreviado' => $data['nombre_abreviado'],
			'precio' => $data['precio'],
			'unidades' => $data['unidades'],
			'hora_inicio' => $data['hora_inicio'],
			'hora_final' => $data['hora_final'],
			'fecha_creacion' => $data['fecha_creacion'],
			'fecha_actualizacion' => $data['fecha_actualizacion'],
			'imgPath' => $data['imgPath'],
		);
		$this->db->insert('rutas', $insertar);
		$this->response($insertar);
		//ultimo ID $this->db-insert_id();
	}
	public function guardarRutaConImg_post(){
		$data = $this->post();	
		if(!isset($data['nombre_ruta']) || !isset($data['nombre_abreviado']) || !isset($data['precio']) 
		|| !isset($data['unidades']) || !isset($data['hora_inicio']) || !isset($data['hora_final'])
		|| !isset($data['fecha_creacion']) || !isset($data['fecha_actualizacion'])){
			$respuesta = array(
				'error' => TRUE, 
				'mensaje' => "Faltan los datos de la ruta en el post"
			);
			$this->response($respuesta);
		}
		$insertar = array(
			'nombre_ruta' => $data['nombre_ruta'], 
			'nombre_abreviado' => $data['nombre_abreviado'],
			'precio' => $data['precio'],
			'unidades' => $data['unidades'],
			'hora_inicio' => $data['hora_inicio'],
			'hora_final' => $data['hora_final'],
			'fecha_creacion' => $data['fecha_creacion'],
			'fecha_actualizacion' => $data['fecha_actualizacion'],
			'imgPath' => $data['imgPath'],
		);
		$this->db->insert('rutas', $insertar);
		$this->response($insertar);
		//ultimo ID $this->db-insert_id();
	}
	public function deleteRuta_post(){
		$data = $this->post();
		if(!isset($data['nombre_ruta'])){
			$respuesta = array(
				'error' => TRUE, 
				'mensaje' => "Faltan los datos de la ruta en el post"
			);
			$this->response($respuesta);
		}
		$condicion = array('nombre_ruta' => $data['nombre_ruta']);
		$this->db->delete('rutas', $condicion); 
		$this->response($condicion);
	}
	public function updateRuta_post(){
		$data = $this->post();
		if(!isset($data['id_ruta'])){
			$respuesta = array(
				'error' => TRUE, 
				'mensaje' => "Faltan los datos de la ruta en el post"
			);
			$this->response($respuesta);
		}
		$actualizarRuta = array(
			'nombre_ruta' => $data['nombre_ruta'], 
			'nombre_abreviado' => $data['nombre_abreviado'],
			'precio' => $data['precio'],
			'unidades' => $data['unidades'],
			'hora_inicio' => $data['hora_inicio'],
			'hora_final' => $data['hora_final'],
			'fecha_actualizacion' => $data['fecha_actualizacion'],
			'imgPath' => $data['imgPath'],
		);
		$this->db->where('id_ruta', $data['id_ruta']);
		$this->db->update('rutas', $actualizarRuta);
		$this->response($actualizarRuta);
	}
	public function subirImagen_post(){
		//Ruta donde se guardan los ficheros
		//$config['upload_path'] = '/xampp/htdocs/BusesBackend/application/controllers/FotosRutas';
		 $config['upload_path'] = './FotosRutas/';
		//Tipos de ficheros permitidos
		 $config['allowed_types'] = 'jpg|png|jpeg';
		 $this->load->library('upload');
		 $this->upload->initialize($config);
		//Se pueden configurar aun mas parámetros.
		//Cargamos la librería de subida y le pasamos la configuración
  
		 if(!$this->upload->do_upload('image')){
			 /*Si al subirse hay algún error lo meto en un array para pasárselo a la vista*/
				$error = array('error' => $this->upload->display_errors());
				$this->response($error);
		 }else{
			 //Datos del fichero subido
			 //$datos["img"]=$this->upload->data();
			 $datos = array('img_info' => $this->upload->data());
  
			 // Podemos acceder a todas las propiedades del fichero subido
			 // $datos["img"]["file_name"]);
  
			 //Cargamos la vista y le pasamos los datos
			 $this->response($datos);
		 }
	 } 
	 public function subirImg_post() {

		if($this->input->method()){
			$this->load->helper('file');
			$config['upload_path'] =  "./FotosRutas/";
			$config['allowed_types'] = 'gif|jpg|png|jpeg';
			$this->load->library('upload');
			$this->upload->initialize($config);
			if (!$this->upload->do_upload('imagen')) {
				$error = array('error' => $this->upload->display_errors());
				$this->response($error);
			} else {
				$data = array('img_info' => $this->upload->data());
				// $this->response($data);
				$ruta_imagen = $data['img_info']['file_name'];
				$this->response($ruta_imagen);
				// $ruta_imagen = base_url() . 'FotosRutas/' . $data['img_info']['file_name'];
				// $this->response(urldecode($ruta_imagen));
				// $this->response(utf8_decode($ruta_imagen));
				// echo json_encode($ruta_imagen);
			}
		}
    }

}
