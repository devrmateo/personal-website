<?php

     $dbServer = "shareddb1a.hosting.stackcp.net";

     $dbUsername = "cl22-users-yq0";

     $dbPassword = "mysqli0!";

     $dbName = "cl22-users-yq0";

     $link = mysqli_connect($dbServer, $dbUsername, $dbPassword, $dbName);

     if (!$link) {

          echo "There was an error connecting to the database.";

          exit();

     }

?>