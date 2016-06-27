<?php
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];

	$to = 'o.caporizzo@gmail.com';
	$headers = "From: $visitor_email \r\n";
	$subject = "Form Submission from Take a Byte";
	$body = "From: $name \n Message: $message";

	$result = mail($to, $subject, $body, $headers) or die("ERROR");
	echo $result;

?>