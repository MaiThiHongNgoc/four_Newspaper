<?php
$servername = "localhost:3306";
$username = "root";
$password = "";
$dbname = "fptaptechDA";

// Thực hiện kết nối đến MySQL
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
