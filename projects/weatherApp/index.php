<?php
  if (array_key_exists("city", $_POST)) {
    $cityEntered = $_POST["city"];
    $urlContents = file_get_contents("http://api.openweathermap.org/data/2.5/weather?q=".$cityEntered."&appid=22439ce7da6c95130e4148669b173bca");
    $weatherArray = json_decode($urlContents, true);
    $cityName = $weatherArray["name"];
    if ($cityEntered == "") {
      $error = "<div class='alert alert-danger message' role='alert'>Please enter a city name.</div>";
    } elseif ($weatherArray["cod"] == "200") {
        $currentConditions = $weatherArray["weather"][0]["description"];
        $tempInKelvin = $weatherArray["main"]["temp"];
        $tempInFarenheit = intval($tempInKelvin * (9/5) - 459.67);
        $weather = "<div class='alert alert-success message' role='alert'>Currently in ".$cityName.": ".$currentConditions.". The temperature is ".$tempInFarenheit."℉.</div>";
    } else {
        $error = "<div class='alert alert-danger message' role='alert'>City not recognized.</div>";
    }
  }
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Weather App</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <div class="container">
      <h1>What's The Weather?</h1>
      <form method="post">
        <div class="form-group">
          <label for="city">Enter the name of a city.</label>
          <input type="text" class="form-control" id="city" name="city" aria-describedby="city" placeholder="London, Beijing">
        </div>
        <button type="submit" id="submit" name="submit" class="btn btn-primary">Submit</button>
      </form>
      <?php
        if (isset($weather)) {
          echo $weather;
        } else {
          echo $error;
        }
      ?>
    </div>
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
  </body>
</html>