# CRUD com Next.js e PHP (MVC)

Este repositório contém um projeto CRUD (Create, Read, Update, Delete) desenvolvido com **Next.js** para o front-end e **PHP (MVC)** para o back-end, utilizando **MySQL** como banco de dados.

## Tecnologias Utilizadas

### **Front-end**
- Next.js (React Framework)
- TailwindCSS (Estilização)
- Bootstrap (Componentes adicionais)
- Axios (Requisições HTTP)

### **Back-end**
- PHP 7.x (Padrão MVC)
- MySQL 5.x (Banco de dados)
- Apache (Servidor via XAMPP)

---

## **Instalação e Configuração**

### **1. Clonar o repositório**
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### **2. Configurar o Back-end (PHP + MySQL)**

1. Instale o **XAMPP** e inicie o **Apache** e **MySQL**.
2. Acesse `http://localhost/phpmyadmin` e crie um banco de dados chamado **crud_db**.
3. Importe o arquivo `database.sql` (se existir no repositório) para criar as tabelas automaticamente.
4. Configure a conexão com o banco no arquivo `backend/config/database.php`:

```php
<?php
class Database {
    private $host = "localhost";
    private $db_name = "crud_db";
    private $username = "root";
    private $password = "";
    public $conn;

    public function getConnection() {
        $this->conn = null;
        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $exception) {
            echo "Erro na conexão: " . $exception->getMessage();
        }
        return $this->conn;
    }
}
?>
```
5. Certifique-se de que o servidor está rodando e execute o backend:
```bash
php -S localhost:8000 -t backend/public
```

### **3. Configurar o Front-end (Next.js + TailwindCSS)**

1. Instale as dependências do projeto:
```bash
cd frontend
npm install
```
2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```
3. Acesse `http://localhost:3000` no navegador.

---

## **Funcionalidades do CRUD**
- 📌 **Criar** novo usuário
- 📌 **Listar** todos os usuários cadastrados
- 📌 **Atualizar** dados de um usuário
- 📌 **Excluir** um usuário

Os seguintes campos estão presentes na aplicação:
- ID (Gerado automaticamente)
- Nome
- E-mail
- Senha (Criptografada)
- Profissão
- Telefone de Contato
- Telefone Celular
- Criado em (Timestamp)

---

## **API - Integração Front-end & Back-end**
A comunicação entre o front-end Next.js e o back-end PHP é feita via **API REST**. As requisições são realizadas através do **Axios**, utilizando os seguintes endpoints:

| Método | Endpoint            | Descrição                     |
|---------|--------------------|--------------------------------|
| GET     | /usuarios          | Lista todos os usuários       |
| POST    | /usuarios          | Cria um novo usuário          |
| PUT     | /usuarios/{id}     | Atualiza um usuário           |
| DELETE  | /usuarios/{id}     | Remove um usuário do banco    |

Exemplo de requisição com Axios no Next.js:
```javascript
import axios from "axios";

const cadastrarUsuario = async (dados) => {
    try {
        const response = await axios.post("http://localhost:8000/usuarios", dados);
        console.log("Usuário cadastrado com sucesso!", response.data);
    } catch (error) {
        console.error("Erro ao cadastrar usuário", error);
    }
};
```

---

## **Deploy**
- **Back-end:** Pode ser hospedado em um servidor PHP com suporte a MySQL, como **Heroku, VPS, Hostinger**.
- **Front-end:** Pode ser publicado na **Vercel** (serviço oficial para Next.js).

---

## **Contribuição**
Se desejar contribuir com o projeto, siga estas etapas:
1. Faça um fork do repositório
2. Crie uma nova branch (`git checkout -b feature-nova`)
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça um push para a branch (`git push origin feature-nova`)
5. Abra um Pull Request

---

## **Contato**
Caso tenha dúvidas ou sugestões, entre em contato:
📧 Email: [seuemail@email.com](mailto:seuemail@email.com)
📌 LinkedIn: [linkedin.com/in/seu-perfil](https://linkedin.com/in/seu-perfil)

---

### 🚀 **Projeto desenvolvido para aprendizado e aprimoramento em desenvolvimento full stack!**

