<?php

session_start();
if(isset($_GET['send'])){
$login = (isset($_GET['login']))?$_GET['login']:"undefined";
$pass = (isset($_GET['pass']))?$_GET['pass']:"undefined";
$_SESSION['login'] = $login;
$_SESSION['pass'] = $pass;
}
//session_destroy();
header('Location: http://php/index.php');

	


?>