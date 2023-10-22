<?php
    // $name = $_POST['name'];
    // $visitor_email = $_POST['email'];
    // $message = $_POST['message'];
    // $email_from = 'dschne29@gmail.com';
    // $email_subject = "New Form submission";
    // $email_body = "You have received a new message from the user $name.\n";
    // $to = "dschne29@gmail.com.com";
    // $headers = "From: $email_from \r\n";
    // $headers = "Reply-To: $visitor_email \r\n";

    // mail($to,$email_subject,$email_body,$headers);
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(
        !empty($_POST['name'])
        && !empty($_POST['email'])
        && !empty($_POST['message'])
    ){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $message = $_POST["message"];


        $to = "dschne29@gmail.com";
        $subject = "New Contact Form Submission";
        $body = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nMessage: {$message}";
        $headers = "From: {$email}";


        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message.";
        }
    }
}
?>