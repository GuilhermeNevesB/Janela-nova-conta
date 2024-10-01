<?php

$dbHost = 'Localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'formulario-teste';

$conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);


/*
if ($conexao->connect_error) {
    die("Falha na conexão: " . $conexao->connect_error);
} else {
    echo "Conexão bem-sucedida!";
}
*/

/**   pegando dados do formulario ** ** */


$nome = $_POST['username'];

$email = $_POST['email'];

$senha = $_POST['password'];

// $passwordConfirmation = $_POST['password-confirmation'];

$smtp = $conexao->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?,?,?)");

$smtp->bind_param("sss", $nome, $email, $senha);

if ($smtp->execute()) {
    echo "Conta Criada";
} else {
    echo "ERRO" . $smtp->error;
}

$smtp->close();
$conexao->close();
