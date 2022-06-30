<?php
  require_once('PHPMailer_5.2.1/class.phpmailer.php');

  $name = $_POST['name'];
  $email = $_POST['email'];
  $msg = $_POST['msg'];
  $subject = $_POST['subject'];

  try {
  $mail = new PHPMailer(true);

  $body .= $msg;

  $mail->IsSMTP();
  $mail->SMTPAuth = true;
  $mail->Port = 465;
  $mail->Host = "smtp.hostinger.com";
  $mail->Username = "stmp@viener.com.br";
  $mail->Password = "smtp.hostinger.com";

  $mail->IsSendmail();

  $mail->AddReplyTo($email, $name);
  $mail->From = $email;
  $mail->FromName   = $name;

  $to = "stmp@viener.com.br";
  $mail->AddAddress($to);
  $mail->Subject = $subject;
  $mail->WordWrap = 80;

  $mail->MsgHTML($body);

  $mail->IsHTML(true);

  $mail->Send();
    echo 'Mensagem enviada com sucesso.';
  } catch (phpmailerException $e) {
    echo $e->errorMessage();
  }
?>
