<?php

// Define some constants
define( "RECIPIENT_NAME", "EVOCTO" );
define( "RECIPIENT_EMAIL", "contact@evocto.fr" );


// Read the form values
$success = false;
$userName = isset( $_POST['username'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['username'] ) : "";
$senderEmail = isset( $_POST['email'] ) ? filter_var( $_POST['email'], FILTER_SANITIZE_EMAIL ) : "";
$message = isset( $_POST['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Message:|Content-Type:)/", "", $_POST['message'] ) : "";
$senderEmail = filter_var( $senderEmail, FILTER_VALIDATE_EMAIL ) ? $senderEmail : "";

// If all values exist, send the email
if ( $userName && $senderEmail && $message ) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $subject = "Nouveau message depuis evocto.fr";
  $headers = "From: " . $userName . " <" . $senderEmail . ">\r\n";
  $headers .= "Reply-To: " . $senderEmail . "\r\n";
  $msgBody = "Name: " . $userName . "\nEmail: " . $senderEmail . "\nMessage: " . $message;
  $success = mail( $recipient, $subject, $msgBody, $headers );
}

$status = $success ? "success" : "failed";
header( "Location: contact.html?message=" . $status );
exit;

?>
