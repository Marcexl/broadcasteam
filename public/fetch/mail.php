<?php
use PHPMailer\PHPMailer\PHPMailer;
require '../vendor/autoload.php';
$res = new stdClass();

$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'smtp.hostinger.com';
$mail->Port = 587;
$mail->SMTPAuth = true;
$mail->Username = 'no-reply@agencybroadcast.com';
$mail->Password = '#Broadcast2024';
$mail->setFrom('no-reply@agencybroadcast.com', 'No Reply');
$mail->addAddress('hola@agencybroadcast.com', 'Broadcast Team');
$mail->Subject = 'Nueva consulta desde broadcast.com';
$mail->IsHTML(true);
$data = json_decode(file_get_contents('php://input'), true);
    
$message = '<h2>Nueva consulta desde Broadcast</h2> 
            <p>Name: '.$data['name'].'</p> 
            <p>Email: '.$data['email'].'</p>
            <p>Phone: '.$data['phone'].'</p>
            <p>Consulting: '.$data['message'].'</p>';
                
$mail->Body = $message;
//$mail->addAttachment('test.txt');
if (!$mail->send()) {
    $res->success = false;
    $res->error = $mail->ErrorInfo;
} else {
    $res->success = true;
}

echo json_encode($res);
exit();

?>