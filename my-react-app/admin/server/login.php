<?php
header('Access-Control-Allow-Origin: http://localhost:3001');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Kết nối cơ sở dữ liệu
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "fptaptechDA";

$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối CSDL
if ($conn->connect_error) {
    die(json_encode(['status' => 'error', 'message' => 'Database connection failed']));
}

// Kiểm tra xem dữ liệu đã được gửi từ React hay chưa
if(isset($_POST['email']) && isset($_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Prepare statement to avoid SQL injection
    $stmt = $conn->prepare("SELECT * FROM user_form WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result && $result->num_rows > 0) {
        $user = $result->fetch_assoc();
        // Verify password
        if (password_verify($password, $user['password'])) {
            echo json_encode(['status' => 'success', 'message' => 'Login successful', 'userType' => $user['user_type']]);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Invalid email or password']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'User does not exist']);
    }

    $stmt->close();
} else {
    echo json_encode(['status' => 'error', 'message' => 'Email and password are required']);
}

$conn->close();
?>


















<!-- <?php
@include 'config.php';

session_start();
$error = array(); // Khởi tạo biến lỗi dưới dạng mảng

if(isset($_POST['submit'])){
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $pass = md5($_POST['password']);

    $select = "SELECT * FROM user_form WHERE email = '$email' AND password = '$pass'";
    $result = mysqli_query($conn, $select);

    if(mysqli_num_rows($result) == 1){
        $row = mysqli_fetch_assoc($result);
        $_SESSION['user_name'] = $row['name'];
        $_SESSION['user_type'] = $row['user_type']; // Lưu loại người dùng để sử dụng sau này

        // Chuyển hướng dựa trên loại người dùng
        if($row['user_type'] == 'admin'){
            header('location:admin_page.php');
            exit();
        } else {
            header('location:user_page.php');
            exit();
        }
    } else {
        $error[] = 'Incorrect email or password!';
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="./css/style.css">
   <title>Login Form</title>
</head>
<body>
<div>
    <div class="register-login">
        <div class="register-customer">
            <div class="login-img">
                <img src="https://desero-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1657783401" alt="" />
            </div>
            <h2 class="title-register"> LOGIN</h2>

            <!-- Form đăng nhập -->
            <form method="post" action="#" class="register-methods">
                <div class="register-group">
                    <label for="email" class="register-group-col">Email address</label>
                    <div class="register-label">
                        <input type="email" id="email" class="register-jsx" name="email" placeholder="Email address" required />
                    </div>
                </div>
                <div class="register-group">
                    <label for="password" class="register-group-col">Password</label>
                    <div class="register-label">
                        <input type="password" id="password" class="register-jsx" name="password" placeholder="Password" required />
                    </div>
                </div>
                <div class="register-center">
                    <button type="submit" class="register-dark" name="submit">Log In</button>
                    <p>Create an account <a href="register.php">Register now</a></p>
                </div>
            </form>
            <!-- Kết thúc form đăng nhập -->
        </div>
    </div>
    <?php if(!empty($error)): ?>
    <div class="error-message"><?php echo implode('<br>', $error); ?></div>
    <?php endif; ?>

    <!-- Hiển thị thông tin người dùng -->
    <?php if(isset($_SESSION['user'])): ?>
        <div class="user-info">
            <?php if($_SESSION['user']['user_type'] == 'admin'): ?>
                <p>You are logged in as an admin. Welcome, <?php echo $_SESSION['user']['name']; ?>!</p>
            <?php elseif($_SESSION['user']['user_type'] == 'user'): ?>
                <p>You are logged in as a regular user. Welcome, <?php echo $_SESSION['user']['name']; ?>!</p>
            <?php endif; ?>
        </div>
    <?php endif; ?>
    <!-- Kết thúc hiển thị thông tin người dùng -->
</div>
</body>
</html> -->
