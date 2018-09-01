<?php

     session_start();

     include "includes/functions.php";

     if (!isLoggedIn()) {

          header("Location: index.php");

     } elseif (array_key_exists("content", $_POST)) {

          include "includes/dbconnection.php";

          $diaryText = escapeString($link, $_POST["content"]);

          $userId = escapeString($link, getLoginId());

          $query = "UPDATE `users` SET `diary_text` = '$diaryText' WHERE `id` = '$userId'";

          mysqli_query($link, $query);

     }


?>