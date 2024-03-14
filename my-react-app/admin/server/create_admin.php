<?php
include 'config.php'; // Kết nối tới cơ sở dữ liệu

// Thông tin admin mới
$name = "Hongngoc";
$email = "hongngoc200509@gmail.com";
$password = "hongngoc21"; // Nên sử dụng mật khẩu mạnh hơn trong thực tế
$user_type = "admin";

// Mã hóa mật khẩu
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Câu lệnh SQL để chèn dữ liệu
$sql = "INSERT INTO user_form (name, email, password, user_type) VALUES (?, ?, ?, ?)";

// Chuẩn bị và thực thi câu lệnh
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $name, $email, $hashed_password, $user_type);

if ($stmt->execute()) {
    echo "Tài khoản admin đã được tạo thành công.";
} else {
    echo "Có lỗi xảy ra: " . $stmt->error;
}

// Đóng kết nối
$stmt->close();
$conn->close();
?>