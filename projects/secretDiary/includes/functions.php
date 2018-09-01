<?php

     function isSignUpPage () {

          if ($_SERVER["PHP_SELF"] == "/complete_web_dev/7-mysql/secret_diary/index.php") {

               return true;

          } else {

               return false;

          }

     }

     function generatePasswordSignUpError ($link, $email, $passwordEntered) {

          if (!emailIsRegistered($link, $email) && $passwordEntered == "") {

                return "<div class='alert alert-danger error' role='alert'>Please enter a password.</div>";

          } else {

               return "";
          }

     }

     function generateEmailSignUpError ($link, $email) {

          if ($email != "" && emailIsRegistered($link, $email)) {

               return "<div class='alert alert-danger error' role='alert'>That email address is already in use.</div>";

          } elseif ($email == "") {

               return "<div class='alert alert-danger error' role='alert'>Please enter an email address.</div>";

          } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

               //email is not valid

               return "<div class='alert alert-danger error' role='alert'>Please enter a valid email</div>";

          } else {

               return "";

          }

     }

     function generateEmailLoginError ($link, $email) {

          if ($email == "") {

               return "<div class='alert alert-danger error' role='alert'>Please enter an email address.</div>";

          } elseif ($email != "" && !emailIsRegistered($link, $email)) {

               return "<div class='alert alert-danger error' role='alert'>That email address was not found.  Please sign up.</div>";

          } else {

               return "";

          }

     }

     function escapeString ($link, $field) {

          $field = mysqli_real_escape_string($link, $field);

          return $field;

     }

     function emailIsRegistered ($link, $email) {

          $email = escapeString($link, $email);

          $query = "SELECT `email` FROM `users` WHERE `email` = '$email'";

          if ($result = mysqli_query($link, $query)) {

               if (mysqli_fetch_array($result)) {

                    //email already registered in database

                    return true;

               } else {

                    //email is not registered in database

                    return false;

               }

          }

     }

     function getUserId ($link, $email) {

          $query = "SELECT `id` FROM `users` WHERE `email` = '$email'";

          if ($result = mysqli_query($link, $query)) {

               if ($row = mysqli_fetch_array($result)) {

                    $userId = $row["id"];

                    return $userId;

               }

          }

     }

     function getCookieId () {

          if (array_key_exists("userId", $_COOKIE)) {

               return $_COOKIE["userId"];

          } else {

               return "";

          }

     }

     function getSessionId () {

          if (array_key_exists("userId", $_SESSION)) {

               return $_SESSION["userId"];

          } else {

               return "";

          }

     }

     function getLoginId () {

          $cookieId = getCookieId();

          $sessionId = getSessionId();

          if ($cookieId) {

               $sessionId = $cookieId;

               return $sessionId;

          } elseif (!$cookieId AND $sessionId) {

               return $sessionId;

          } else {

               return "";

          }

     }

     function isLoggedIn () {

          if (getLoginId()) {

               return true;

          } else {

               return false;

          }

     }

?>
