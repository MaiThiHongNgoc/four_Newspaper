<?php
include "config.php";

if (isset($_POST["submit"])) {
   $name = $_POST['name'];
   $email = $_POST['email'];
   $password = $_POST['password'];

   // Hash the password before storing it
   $hashed_password = password_hash($password, PASSWORD_DEFAULT);

   // SQL query to insert data into the database
   $sql = "INSERT INTO user_form (name, email, password) VALUES ('$name','$email','$hashed_password')";

   // Execute the query
   $result = mysqli_query($conn, $sql);

   // Check if the query executed successfully
   if ($result) {
      // Redirect to admin page with success message
      header("Location: admin_page.php?msg=New record created successfully");
   } else {
      // If the query fails, display error message
      echo "Failed: " . mysqli_error($conn);
   }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <!-- Bootstrap CSS -->
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
   <!-- Font Awesome -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
   <title>Add New User</title>
</head>

<body>
   <nav class="navbar navbar-light justify-content-center fs-3 mb-5" style="background-color: #58B720;">
      Add New User
   </nav>

   <div class="container">
      <div class="text-center mb-4">
         <h3>Add New User</h3>
         <p class="text-muted">Complete the form below to add a new user.</p>
      </div>

      <div class="container d-flex justify-content-center">
         <form action="YOUR_PHP_SCRIPT.php" method="post" style="width:50vw; min-width:300px;">
            <div class="mb-3">
               <label class="form-label">Name:</label>
               <input type="text" class="form-control" name="name" placeholder="John Doe" required>
            </div>

            <div class="mb-3">
               <label class="form-label">Email:</label>
               <input type="email" class="form-control" name="email" placeholder="name@example.com" required>
            </div>

            <div class="mb-3">
               <label class="form-label">Password:</label>
               <input type="password" class="form-control" name="password" required>
            </div>

            <div class="d-flex justify-content-between">
               <button type="submit" class="btn btn-success" name="submit">Save</button>
               <a href="admin_page.php" class="btn btn-danger">Cancel</a>
            </div>
         </form>
      </div>
   </div>

   <!-- Bootstrap JS bundle -->
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
