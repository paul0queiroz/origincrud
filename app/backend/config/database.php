<?php 
class Database {
    private $host = "localhost";
    private $db_name = "crud_mvc";
    private $username = "root";
    private $password = "";
    private $conn;

    //Construtor privado para garantir que vai ser chamado somente pelo metodo estático sempre que vai haver uma única instância
    // Dessa classe onde $instance vai ser estatica e sera definica como um new desta classe
    //Próxima chamada desse método $instance não estará mais nula e apenas retornará o objeto PDO, aguardado pelos models 
    public static function getConnection(){
        static $instance = null;

        if ($instance === null) {
            $instance = new self();
        }
        return $instance-> conn;
    } 
    //Metodo para fazer conexão com o banco de dados
    public function connect(){
        try {
            $this->conn = new PDO("mysql:host=".$this->host.";dbname=".$this->db_name, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE + EXCEPTION);
        }
        catch (PDOException $exception) {
            echo "Connection Error: " . $exception->getMessage();
        }
    }
}
?>