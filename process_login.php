<?php
include 'incorporate/db_connect.php';
include 'incorporate/functions.php';
 
sec_session_start(); // Our custom secure way of starting a PHP session.

if (isset($_POST['email'], $_POST['p'])) {
    $email = $_POST['email'];
    $password = $_POST['p']; // The hashed password.
    //print_r($email);
    if (login($email, $password) == true) {
        // Login success 
        header('Location: hi/');
    } else {
        // Login failed 
        header('Location: index.php?error=1');
    }
} else {
    // The correct POST variables were not sent to this page. 
    echo 'Invalid Request';
}