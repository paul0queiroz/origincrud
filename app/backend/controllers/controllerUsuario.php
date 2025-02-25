<?php 
require_once "app/models/modelUsuario.php";

class controllerUsuario{

    private $usuarioModel; //Atributo para armazenar o objeto usuarioModel

    public function __construct(){
        $this->usuarioModel = new Usuario(); //Instanciando o objeto usuarioModel
    }
    
    public function listar(){
        $usuarios = $this->usuarioModel->listarUsuarios();
        include "views/usuarios/usuarios.php";
}
    public function cadastrar(){
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $nome = $_POST["nome"];
            $email = $_POST["email"];
            $senha = $_POST["senha"];
            $telefone_contato = $_POST["telefone_contato"] default NULL;
            $telefone_celular = $_POST["telefone_celular"] default NULL;
            $profissao = $_POST["profissao"];
        }
        include "views/usuarios/cadastrar.php";	
    }
?>