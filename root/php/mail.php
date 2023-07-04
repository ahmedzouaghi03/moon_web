<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$adress= $_POST['adress'];
$topic= $_POST['topic'];
$to = "ahmedzouaghi2003@gmail.com";
$subject = "Mail From Moon Innovation";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Adress =" . adress . "\r\n  Topic = " . $topic;
/*$headers = "From: ".$name . "\r\n" .
"CC: abdelmajid.zouaghi@gmail.com";*/
if($email!=NULL){
    mail($to,$subject,$txt);
}
//redirect
header("Location:thanks.html");
?>