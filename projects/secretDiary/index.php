<?php

     session_start();

     include "includes/functions.php";

     if (array_key_exists("submit", $_POST)) {

          //connect to the database

          include "includes/dbconnection.php";

          //validate form

          $email = $_POST["email"];

          $emailErrorMessage = generateEmailSignUpError($link, $email);

          $passwordEntered = $_POST["password"];

          $passwordErrorMessage = generatePasswordSignUpError($link, $email, $passwordEntered);

          $allErrors = $emailErrorMessage.$passwordErrorMessage;
               if ($allErrors == "") {

               //hash the user's password and enter them into database

               $passwordEntered = password_hash($passwordEntered, PASSWORD_DEFAULT);

               $email = mysqli_real_escape_string($link, $email);

               $query = "INSERT INTO `users` (`email`, `password`) VALUES ('$email', '$passwordEntered')";

               if (mysqli_query($link, $query)) {

                    //initialize session variable

                    $_SESSION["userId"] = getUserId($link, $email);

                    //if "stay logged in" is checked, initialize cookie variable"

                    if (isset($_POST["cookie"]) && $_POST["cookie"] == "1") {

                         $userId = $_SESSION["userId"];

                         $oneDay = 60 * 60 * 24;

                         setcookie("userId", $userId, time() + $oneDay);

                    }

                    //redirect user to the diary page.

                    header("Location: diary.php");

               }

          }

     }

?>


<!DOCTYPE html>

<html>

     <?php

          include "includes/head.php";

     ?>

     <body>

          <div class="disclaimer">Disclaimer: This is an application that I built to continue my learning and showcase my skills.  Please do not enter any personal information.</div>

          <div class="container-fluid text-center">

               <h1>Secret Diary</h1>

               <h5>Store your thoughts permanently and securely.</h5>

               <h6>Interested?  Sign Up Now.</h6>

               <?php

                    include "includes/form.php";

               ?>

          </div>

          <?php

               include "includes/scripts.php";

          ?>

     </body>

</html>


