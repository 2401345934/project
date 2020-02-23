<?php
header("Content-Type: text/html;charset=utf-8");

$name = $_REQUEST['username'];
$pwd = $_REQUEST['password'];


$link = mysqli_connect('localhost','root','root','project');

$msq = mysqli_query($link, "SELECT * FROM `login` WHERE `username`='$name' ");


$data = mysqli_fetch_assoc($msq);


if($data){
    echo 0;
}else{
   $res = mysqli_query($link,"INSERT INTO `login` VALUES(null,'$name','$pwd')");
    if($res){
        echo 1;
    }else {
        echo 0;
    }
}


?>