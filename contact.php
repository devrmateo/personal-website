<?php
  $emailError = "";
  $received = "";
  if (array_key_exists("submit", $_POST)) {
    //If the form has been submitted, validate the email address.
    $emailEntered = $_POST["email"];
    $commentsEntered = $_POST["comments"];
    $isValidEmail = filter_var($emailEntered, FILTER_VALIDATE_EMAIL);
    if ($isValidEmail) {
      //If email is valid, send email
      //Set email error message to a blank string, so it will not fire an "undefined" message.

      $myEmail = "devrmateo@gmail.com";
      $to = $myEmail;
      $firstName = $_POST["firstName"];
      $lastName = $_POST["lastName"];
      $subject = "Website Inquiry";
      $message = "Message from: ".$firstName." ".$lastName."\n\n"."Comments: ".(wordwrap($commentsEntered, 70, "\r\n"));
      $headers = "From: $emailEntered";
      if (mail($to, $subject, $message, $headers)) {
           $received = "<div class='received'>Thanks for reaching out!  I'll be in touch soon.</div>";
      } else {
           $received = "<div class='received'>Email could not be sent.  Please try again later.</div>";
      }
    } else {
      $emailError = "<div class='emailError'>Please enter a valid email.</div>";
    }
  }
?>

<!DOCTYPE html>
<html>
  <head>
    <?php include "includes/head.php";?>
    <title>Matthew Price Smith | Contact</title>
  </head>
  <body>
    <div class="wrapper">
      <?php include "includes/header.php" ?>
      <main>
        <section class="mainNavPanel">
          <?php include "includes/nav.php";?>
        </section>
        <section class="content extendedContent">
          <h2>Contact</h2>
          <?php echo $received; ?>
          <form method="post">
            <div class="formGroup">
              <label for="firstName">First Name:</label>
              <input type="text" name="firstName" required>
            </div>
            <div class="formGroup">
              <label for="lastName">Last Name:</label>
              <input type="text" name="lastName" required>
            </div>
            <div class="formGroup">
              <label for="email">Email Address:</label>
              <input type="email" name="email" required>
              <?php echo $emailError ?>
            </div>
            <div class="formGroup">
              <label for="comments">Comments:</label>
              <textarea name="comments" rows="6" placeholder="Please leave any comments, questions, or concerns here." required></textarea>
            </div>
            <button type="submit" name="submit">Submit</button>
          </form>
        </section>
        <div class="contactEmail">Email: <a class="email" href="mailto:devrmateo@gmail.com">devrmateo@gmail.com</a></div>
      </main>
      <footer>
        <?php include "includes/footer.php" ?>
      </footer>
    </div>
  <!--End wrapper div-->
  <script src="js/script.js"></script>
  </body>
</html>
