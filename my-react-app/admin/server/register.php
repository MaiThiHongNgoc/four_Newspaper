<?php
header('Access-Control-Allow-Origin: http://localhost:3001');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$servername = "localhost:3306";
$username = "root";
$password = "";
$dbname = "fptaptechDA1";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data)) {
    $email = $data['email'];
    $password = $data['password'];
    $name = $data['name'];
    $user_type = $data['user_type'];
} else {
    $email = $password = $name = $user_type = null;
}

if (!empty($email) && !empty($password) && !empty($name) && !empty($user_type)) {
    $stmt = $conn->prepare("SELECT email FROM user_form WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo json_encode(array("message" => "Email already exists."));
    } else {
        $passwordHash = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $conn->prepare("INSERT INTO user_form (name, email, password, user_type) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $name, $email, $passwordHash, $user_type);

        if ($stmt->execute()) {
            echo json_encode(array("message" => "User was successfully registered."));
        } else {
            echo json_encode(array("message" => "Unable to register the user."));
        }
    }
} else {
    echo json_encode(array("message" => "Incomplete data."));
}

$conn->close();
?>
