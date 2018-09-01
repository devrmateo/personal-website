$("textarea").on("input", function () {

     //Send diary text to the database

     $.ajax({

          //Send data as a post variable using ajax

          method: "POST",
          url: "updateDiaryText.php",
          data: {content: $("textarea").val()}

     });

});