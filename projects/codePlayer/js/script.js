function setPanelHeight() {

    // Set height of content panels to fit screen.

    var headerHeight = $("#header").height();

    var headerBorder = parseFloat($("#header").css("border-bottom-width"));

    var windowHeight = $(window).height();

    $(".panel").height(windowHeight - headerHeight - headerBorder);

}

function getNumberOfActivePanels() {

    //Get number of panels that are currently active.

    var maximumPanelsActive = 4;

    var numberOfInactivePanels = $(".hidden").length;

    var numberOfActivePanels = maximumPanelsActive - numberOfInactivePanels;

    return numberOfActivePanels;

}

function setPanelWidth() {

    //Set width of content panels based on number of active panels.

    var numberOfActivePanels = getNumberOfActivePanels();

    var screenWidth = $(window).width();

    if (numberOfActivePanels > 0) {

         $(".panel").width(screenWidth / numberOfActivePanels);

    }

}

function updateOutput() {

    //Update iframe with output from content panels.

    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" +  $("#cssPanel").val() + "</style>" + "</head><body>" + $("#htmlPanel").val() + "</body></html>");

    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());

}

setPanelHeight();

setPanelWidth();

$(window).resize(function() {

    //Resize height and width of content panels to fit window when window is resized.

    setPanelHeight();
    setPanelWidth();

});

// Set hover properties

$(".toggleButton").hover(function () {

    var buttonClass = $(this).attr("class");

    if (buttonClass.includes("active")) {

        //Link is active; add a class of "activeHover"

        $(this).addClass("active:hover");

    } else {

        //Link is not active; add a class of "toggleButton:hover"

        $(this).addClass("toggleButton:hover");

    }

}, function() {

    var buttonClass = $(this).attr("class");

    if (buttonClass.includes("active:hover")) {

        //Remove "activeHover" class on mouseout.

        $(this).removeClass("active:hover");

    } else {

        //Remove "toggleButton:hover" class on mouseout.

        $(this).removeClass("toggleButton:hover");

    }

});

$(".toggleButton").click(function() {

    // Toggle selected button, giving it a class of either "active" or "hidden"

    var buttonClass = $(this).attr("class");

    $(this).toggleClass("active");

    var panelId = $(this).attr("id") + "Panel";

    $("#" + panelId).toggleClass("hidden");

    setPanelWidth();

});

updateOutput();

$("textarea").on("change keyup paste", function() {

    //Automatically and instantaneously update iframe contents on the "change", "keyup" and "paste" events.

    updateOutput();

});