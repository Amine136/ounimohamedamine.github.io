<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';  // Ensure you have installed PHPMailer

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(strip_tags(trim($_POST['cf-name'])));
    $email = htmlspecialchars(strip_tags(trim($_POST['cf-email'])));
    $message = htmlspecialchars(strip_tags(trim($_POST['cf-message'])));

    $mail = new PHPMailer(true);
    
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';  // Gmail SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'ounimed019@gmail.com';  // Your Gmail address
        $mail->Password = 'ppcr plqy hkyy amfp';  // Your Gmail password or app-specific password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;  // TLS port for Gmail
        
        // Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('ouniepi@gmail.com');  // Your email address

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Message';
        $mail->Body    = "Name: $name<br>Email: $email<br><br>Message:<br>$message";

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
