$(document).ready(function () {
    $(".nav-link").click(function (e) { 
        $('a').removeClass('active');
        $(this).addClass("active");
        $(this).trigger("click");
        e.preventDefault();
        
    });

    $(".w-100").click(function (e) { 
        var selectImage = $(this).prop('src');
        $('.lightbox > img').remove();
        $('.lightbox').append($("<img>",{"src":selectImage}));

        e.preventDefault();
        
    });
});