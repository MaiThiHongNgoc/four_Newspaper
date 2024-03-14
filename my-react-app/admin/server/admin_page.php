<?php
@include 'config.php';

session_start();

if (!isset($_SESSION['admin_name'])) {
    header('Location: login.php'); // Chuyển hướng người dùng đến trang đăng nhập nếu chưa đăng nhập
    exit;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="./css/style.css">
   <title>Admin Page</title>
</head>
<body>
    <h1>Welcome, <?php echo $_SESSION['admin_name']; ?>!</h1>
    <!-- Nội dung của trang admin ở đây -->
</body>
</html>