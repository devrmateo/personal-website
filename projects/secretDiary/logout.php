<?php

     session_start();

     include "includes/functions.php";

     if (!isLoggedIn()) {

          header("Location: index.php");

     } else {

          $oneHour = 60 * 60;

          setcookie("userId", "", time() - $oneHour);

          unset($_SESSION);

          session_destroy();

          header("Location: index.php");

          die;

     }

?>