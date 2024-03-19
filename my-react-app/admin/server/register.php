<?php
header('Access-Control-Allow-Origin: http://localhost:3001');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$servername = "localhost:3306";
$username = "root";
$password = "";
$dbname = "fptaptechDA1";

// Tạo kết nối
$conn = new mysqli($servername, $username, $password, $dbname);

// Xử lý yêu cầu OPTIONS từ trình duyệt
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
   exit; // Chỉ cần trả về header
}

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Nhận dữ liệu JSON gửi đến
$data = json_decode(file_get_contents("php://input"));

if (!empty($data->email) && !empty($data->password) && !empty($data->name) && !empty($data->user_type)) {
    // Kiểm tra email đã tồn tại chưa
    $stmt = $conn->prepare("SELECT email FROM user_form WHERE email = ?");
    $stmt->bind_param("s", $data->email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        // Email đã tồn tại
        echo json_encode(array("message" => "Email already exists."));
    } else {
        // Mã hóa mật khẩu
        $passwordHash = password_hash($data->password, PASSWORD_DEFAULT);

        // Thêm người dùng mới vào database
        $stmt = $conn->prepare("INSERT INTO user_form (name, email, password, user_type) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $data->name, $data->email, $passwordHash, $data->user_type);

        if ($stmt->execute()) {
            echo json_encode(array("message" => "User was successfully registered."));
        } else {
            echo json_encode(array("message" => "Unable to register the user."));
        }
    }
} else {
    echo json_encode(array("message" => "Incomplete data."));
}

// Đóng kết nối
$conn->close();
?>
