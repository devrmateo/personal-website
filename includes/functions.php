<?php

     function toggleClass ($sectionClass) {

          if ($sectionClass == "mainNav") {

               $navClass = "mainNavLink";

          } else {

               $navClass = "navLinkFooter";

          }

          return $navClass;

     }

?>