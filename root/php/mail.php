<?php
// Get data from form
$name = $_POST['name'];
$email = $_POST['email'];
$address = $_POST['address'];
$topic = $_POST['topic'];
$to = "ahmedzouaghi2003@gmail.com";
$subject = "Mail From Moon Innovation";

// Construct the email message
$txt = "Name: $name\nEmail: $email\nAddress: $address\nTopic: $topic";

if ($email != NULL) {
    // Send the email
    mail($to, $subject, $txt);
}

// Redirect
header("Location: thanks.html");
?>

