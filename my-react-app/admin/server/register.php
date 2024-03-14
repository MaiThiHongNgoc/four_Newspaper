<?php
@include 'config.php';
$error = ''; // Khởi tạo biến lỗi

if(isset($_POST['submit'])){
   $name = mysqli_real_escape_string($conn, $_POST['name']);
   $email = mysqli_real_escape_string($conn, $_POST['email']);
   $pass = md5($_POST['password']);
   $confirmPassword = md5($_POST['confirmPassword']); 
   $user_type = isset($_POST['user_type']) ? $_POST['user_type'] : '';

   $select = "SELECT * FROM account WHERE email = '$email'";
   $result = mysqli_query($conn, $select);

   if(mysqli_num_rows($result) > 0){
      $error = 'User already exists!';
   } else {
      if($pass != $confirmPassword){
         $error = 'Passwords do not match!';
      } else {
         $insert = "INSERT INTO account(username, email, password) VALUES('$name','$email','$pass')";
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

