<?php

     session_start();

     include "includes/functions.php";

     if (array_key_exists("submit", $_POST)) {

          //connect to the database

          include "includes/dbconnection.php";

          //validate form

          $email = $_POST["email"];

          $emailErrorMessage = generateEmailLoginError($link, $email);

          $passwordEntered = $_POST["password"];

          //check user's email against database

          if ($emailErrorMessage == "" && $passwordEntered != "") {

               //user is registered; verify password.

               $email = mysqli_real_escape_string($link, $email);

               $query = "SELECT `password` FROM `users` WHERE `email` = '$email'";

               if ($result = mysqli_query($link, $query)) {

                    if ($row = mysqli_fetch_array($result)) {

                         $storedPassword = $row["password"];

                         if (password_verify($passwordEntered, $storedPassword)) {

                              //password is valid; log user in and set session variable

                              $_SESSION["userId"] = getUserId($link, $email);

                              if (isset($_POST["cookie"]) && $_POST["cookie"] == "1") {

                                   $userId = $_SESSION["userId"];

                                   $oneDay = 60 * 60 * 24;

                                   setcookie("userId", $userId, time() + $oneDay);

                              }

                              header("Location: diary.php");

                         } else {

                         //passwords don't match; throw error message

                         $passwordErrorMessage = "<div class='alert alert-danger error' role='alert'>Invalid password.</div>";

                         }

                    }

               }

          } elseif ($email != "" && emailIsRegistered($link, $email) && $passwordEntered == "") {

                    $passwordErrorMessage = "<div class='alert alert-danger error' role='alert'>Please enter a password.</div>";

          } else {

               //email is not registered; redirect user to sign up page.

               $emailErrorMessage = generateEmailLoginError($link, $email);

               $passwordErrorMessage = "";

          }

     }

?>


<!DOCTYPE html>

<html>

     <?php

          include "includes/head.php";

     ?>

     <body>

          <div class="container-fluid center">

               <h1>Secret Diary</h1>

               <h5>Store your thoughts permanently and securely.</h5>

               <h6>Log in using your email and password.</h6>

               <?php

                    include "includes/form.php";

               ?>

          </div>

          <?php

               include "includes/scripts.php";

          ?>

     </body>

</html>