$(document).ready(function () {
    var estado=false;
    $("#color").click(function (e) { 
        console.log(estado);
        if(!estado){
            $('ul').addClass('texto');
            estado=true;
        }else{
            estado=false;
            $("ul").removeClass("texto");
        }
        
        e.preventDefault();
        
    });


    $("#color2").click(function (e) { 
        

        if(!estado){
            $("li:first-child").addClass("texto");
            estado=true;
        }else{
            estado=false;
            $("li:first-child").removeClass("texto");
        }
        
            e.preventDefault();
        
    });
});