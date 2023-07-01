<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $adress = $_POST['adress'];
    $topic = $_POST['topic'];
  // Retrieve more fields if needed

  // Send the email
  $to = 'ahmedzouaghi2003@gmail.com';
  $subject = 'Form Submission';
  $message = "Name: $name\nEmail: $email\n Adress: $adress\nTopic: $topic"; // Include more fields in the message as needed
  $headers = "From: $email";

  if (mail($to, $subject, $message, $headers)) {
    echo 'Email sent successfully!';
  } else {
    echo 'Failed to send email.';
  }
}
?>