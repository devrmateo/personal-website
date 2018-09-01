<form method="post">

     <div class="form-group row bottom">

          <div class="col">

               <input type="email" class="form-control" name="email" id="email" placeholder="Email">

          </div>

     </div>

     <?php

          if (isset($emailErrorMessage)) {

               echo $emailErrorMessage;

          }

     ?>

     <div class="form-group row bottom">

          <div class="col">

               <input type="password" class="form-control" name="password" id="password" placeholder="Password">

          </div>

     </div>

     <?php

          if (isset($passwordErrorMessage)) {

               echo $passwordErrorMessage;

          }

     ?>

     <div class="form-group row">

          <div class="col">

               <div class="form-check">

                    <label class="form-check-label">

                         <input class="form-check-input" type="checkbox" name="cookie"> Stay logged in

                    </label>

               </div>

          </div>

     </div>

     <div class="form-group row">

          <div class="col">

               <button type="submit" name="submit" class="btn btn-success">

                    <?php

                         if (isSignUpPage()) {

                              echo "Sign Up";

                         } else {

                              echo "Sign In";

                         }

                    ?>

               </button>

          </div>

     </div>

</form>

<?php

     if (isSignUpPage()) {

          echo "<a href='login.php'>Log in</a>";

     } else {

          echo "<a href='index.php'>Sign Up.</a>";

     }

?>









