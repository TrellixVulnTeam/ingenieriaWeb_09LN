$(document).ready(function () {
  $("button").on("click", function () {
    $.ajax({
      //data: {"parametro1" : "valor1", "parametro2" : "valor2"},
      data:{},
      type: "GET",
      dataType: "json",
      url: "http://localhost/scripts/script.php",
    })
   .done(function( data, textStatus, jqXHR ) {
       if ( console && console.log ) {
           
        $("#galeria").append($("<img>",{"src":"images/"+data["imagen"],"alt":data["nombre"],"width":"200px"})).append($("<p>").append(data["nombre"]));
           console.log( "La solicitud se ha completado correctamente." );
       }
   })
   .fail(function( jqXHR, textStatus, errorThrown ) {
       if ( console && console.log ) {
           console.log( "La solicitud a fallado: " +  textStatus);
       }
  });

  });
    
});

