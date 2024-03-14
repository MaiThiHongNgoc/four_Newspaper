<?php
@include 'config.php';

session_start();

$error = ''; // Khởi tạo biến lỗi

if (isset($_POST['submit'])) {

    if (!empty($_POST['email']) && !empty($_POST['password'])) {
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        
        // Lấy thông tin người dùng từ cơ sở dữ liệu
        $select = mysqli_prepare($conn, "SELECT * FROM user_form WHERE email = ?");
        mysqli_stmt_bind_param($select, "s", $email);
        mysqli_stmt_execute($select);
        $result = mysqli_stmt_get_result($select);
        
        if ($row = mysqli_fetch_array($result)) {
            // Xác minh mật khẩu
            if (password_verify($_POST['password'], $row['password'])) {
                if ($row['user_type'] == 'admin') {
                    $_SESSION['admin_name'] = $row['name'];
                    header('location: admin_page.php'); // Chuyển hướng đến trang admin_page.php
                    exit(); // Dừng kịch bản sau khi chuyển hướng
                } elseif ($row['user_type'] == 'user') {
                    $_SESSION['user_name'] = $row['name'];
                    header('location: usser_page.php');
                    exit();
                }
            } else {
                $error = 'Incorrect email or password!';
            }
        } else {
            $error = 'User not found!';
        }
    } else {
        $error = 'Please fill in both email and password!';
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
                 <label for="StaticEmail" class="register-group-col">Email address</label>
                 <div class="register-label">
                  <input type="email" class="register-jsx" name="email" placeholder="Email address" required />
               </div>
               </div>
             <div class="register-group">
             <label for="inputPassword" class="register-group-col">Password</label>
             <div class="register-label">
              <input type="password" class="register-jsx" name="password" placeholder="Password" required />
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
        <div class="error-message"><?php echo $error; ?></div>
      <?php endif; ?>
    </div>
</body>
</html>
