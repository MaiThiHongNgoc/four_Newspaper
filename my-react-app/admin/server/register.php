<?php
header('Access-Control-Allow-Origin: http://localhost:3001');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$servername = "localhost:3306";
$username = "root";
$password = "";
$dbname = "fptaptechDA";

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

if (!empty($data->email) && !empty($data->password) && !empty($data->username)) {
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
        $stmt = $conn->prepare("INSERT INTO user_form (name, email, password, user_type) VALUES (?, ?, ?, 'user')");
        $stmt->bind_param("sss", $data->username, $data->email, $passwordHash);

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
























<!-- <?php
@include 'config.php';
$error = ''; // Khởi tạo biến lỗi

if(isset($_POST['submit'])){
   $name = mysqli_real_escape_string($conn, $_POST['name']);
   $email = mysqli_real_escape_string($conn, $_POST['email']);
   $pass = md5($_POST['password']);
   $confirmPassword = md5($_POST['confirmPassword']); 
   $user_type = isset($_POST['user_type']) ? $_POST['user_type'] : '';

   // Cập nhật tên bảng thành user_form
   $select = "SELECT * FROM user_form WHERE email = '$email'";
   $result = mysqli_query($conn, $select);

   if(mysqli_num_rows($result) > 0){
      $error = 'User already exists!';
   } else {
      if($pass != $confirmPassword){
         $error = 'Passwords do not match!';
      } else {
         // Cập nhật tên bảng thành user_form
         $insert = "INSERT INTO user_form(username, email, password, user_type) VALUES('$name','$email','$pass','$user_type')";
         mysqli_query($conn, $insert);
         header('location: login.php');
      }
   }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Register Form</title>
   <!-- Custom CSS File Link -->
   <link rel="stylesheet" href="css/style.css">
</head>
<body>
   
<div class="form-container">
    <div class="register-content">
        <div class="login-img">
            <img src="https://desero-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1657783401" alt="" />
        </div>
        <h2 class="title-register">Create an account</h2>
        <form action="" method="POST">
            <div class="form-group">
                <input type="text" class="form_control" name="name" placeholder="Username" required />
            </div>
            <div class="form-group">
                <input type="email" class="form_control" name="email" placeholder="Email address" required />
            </div>
            <div class="form-group">
                <input type="password" class="form_control" name="password" placeholder="Password" required />
            </div>
            <div class="form-group">
                <input type="password" class="form_control" name="confirmPassword" placeholder="Confirm Password" required />
            </div>
            <div class="form-group">
    <label for="user_type">Account Type:</label>
    <select name="user_type" class="form_control">
        <option value="admin">Admin</option>
        <option value="user">User</option>
    </select>
</div>
            <?php if(!empty($error)): ?>
                <div class="error"><?php echo $error; ?></div>
            <?php endif; ?>
            <button type="submit" name="submit" class="btn-register">Register</button>
            <p>Already have an account? <a href="login.php">Login here</a></p>
        </form>
    </div>
</div>

</body>
</html>
 -->
