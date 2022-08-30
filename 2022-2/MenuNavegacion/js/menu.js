$(document).ready(function () {
    $(".nav-link").click(function (e) { 

         $(".nav-link").removeClass("active");

         $(this).addClass("active");

         console.log("el evento click");

        e.preventDefault();
        
    });
});





