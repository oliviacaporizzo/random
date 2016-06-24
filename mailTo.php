<?php
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];

	$to = "o.caporizzo@gmail.com";
	$headers = "From: $visitor_email \r\n";
	$subject = "Form Submission from Take a Byte"
	$body = $message;
	
	mail($to, $subject, $body, $headers);
?>