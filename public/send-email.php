<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

// ============================================
// CONFIGURACIÓN DEL CORREO
// ============================================
$smtp_host      = "mail.taichile.com";
$smtp_usuario   = "test@taichile.com";
$smtp_password  = "z&cl856tz5";
$smtp_puerto    = 465;
$correo_destino = "test@taichile.com";
// ============================================

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Método no permitido"]);
    exit;
}

$nombre   = htmlspecialchars(trim($_POST["nombre"] ?? ""));
$email    = htmlspecialchars(trim($_POST["email"] ?? ""));
$telefono = htmlspecialchars(trim($_POST["telefono"] ?? ""));
$producto = htmlspecialchars(trim($_POST["producto"] ?? "No especificado"));
$servicio = htmlspecialchars(trim($_POST["servicio"] ?? "No especificado"));

if (empty($nombre) || empty($email) || empty($telefono)) {
    echo json_encode(["success" => false, "message" => "Faltan campos requeridos"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Email inválido"]);
    exit;
}

// Usar la función mail() de PHP
$asunto = "Nueva consulta de $nombre - TAIChile";
$mensaje = "Nombre: $nombre\n";
$mensaje .= "Email: $email\n";
$mensaje .= "Teléfono: $telefono\n";
$mensaje .= "Producto: $producto\n";
$mensaje .= "Servicio: $servicio\n";

$headers = "From: $smtp_usuario\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($correo_destino, $asunto, $mensaje, $headers)) {
    echo json_encode(["success" => true, "message" => "Mensaje enviado correctamente"]);
} else {
    echo json_encode(["success" => false, "message" => "Error al enviar el mensaje"]);
}
?>