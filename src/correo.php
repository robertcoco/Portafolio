<?php

if($_POST['enviar']) 
{
    if (!empty($_POST['asunto'] && !empty($_POST['ClientEmail']) && !empty($_POST['description']))) {
        $email = $_POST['ClientEmail'];
        $asunto = $_POST['asunto'];
        $description = $_POST['description'];
        $header = "From: noreply@example.com" . "\r\n";
        $header .= "Reply-To: noreply@example.com" . "\r\n";
        $header .=  "X-Mailer: PHP/". phpversion();
        $mail = mail($email, $asunto, $description, $header);

        if($mail) {
            echo "<h4>Mensaje enviado exactamente</h4>";
        }
    }
}