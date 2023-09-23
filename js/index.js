$(".switch").on("click", function() {
    if($("main").hasClass("dark")) {
        $("main").removeClass("dark");
        $(".switch").text("OFF");
    } else {
        $("main").addClass("dark");
        $(".switch").text("ON");
    }
});

/* 
$(document).ready
*/