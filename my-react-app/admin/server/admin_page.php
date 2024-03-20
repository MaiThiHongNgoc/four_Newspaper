<?php
@include 'config.php';

session_start();

// if (!isset($_SESSION['admin_name'])) {
//     header('Location: login.php'); // Chuyển hướng người dùng đến trang đăng nhập nếu chưa đăng nhập
//     exit;
// }

?>

<!DOCTYPE html>
<html>
<head>
    <title>Admin Page</title>
    <link rel="stylesheet" type="text/css" href="admin.css">
</head>
<body>
    <?php
    // Đoạn mã PHP để xử lý yêu cầu từ client
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Xử lý dữ liệu được gửi từ client
        $email = $_POST['email'];
        $password = $_POST['password'];

        // Thực hiện xác thực người dùng, kiểm tra cơ sở dữ liệu, vv.
        // Sau đó, trả về phản hồi tương ứng cho client
        // Ví dụ:
        if ($email == "hongngoc@gmail.com" && $password == "hongngoc09") {
            echo "Welcome, admin!";
        } else {
            echo "Invalid email or password.";
        }
    }
    ?>
    
    <!-- Phần giao diện của trang admin -->
    <div class="grid-container">
        <!-- Phần header, sidebar, home sẽ được chuyển đổi từ mã React -->hêlo
    </div>

    <!-- Tệp JavaScript của ứng dụng React -->
    <script type="text/javascript" src="admin.js"></script>
</body>
</html>