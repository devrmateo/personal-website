<?php

     session_start();

     include "includes/functions.php";

     if (!isLoggedIn()) {

          header("Location: index.php");

     } else {

          include "includes/dbconnection.php";

          $userId = getLoginId();

          $query = "SELECT `id`, `diary_text` FROM `users` WHERE `id` = '$userId'";

          if ($result = mysqli_query($link, $query)) {

               if ($row = mysqli_fetch_array($result)) {

                    $diaryText = $row["diary_text"];

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

          <div class="container-fluid lessMargin">

               <a href="logout.php"><button class="button">Log out</button></a>

               <textarea id="diary">

                    <?php

                         if (isset($diaryText)) {

                              echo $diaryText;

                         }

                    ?>

               </textarea>

          </div>

          <?php

               include "includes/scripts.php";

          ?>

     </body>

</html>