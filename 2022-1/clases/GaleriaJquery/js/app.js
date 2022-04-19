$(document).ready(function () {
   var galeria=["1.jpg","2.jpg","3.jpg"];

   //objeto
   

    for(var i=0;i<galeria.length;i++){
      $("#galeria").append($("<li>",{"class":"nav-item"}).append($("<a>",{"href":"#" }).click({"id":i},function (e) { 
        alert("salida"+e.data.id) ;
        e.preventDefault();
          
      }).append($("<img>",{"id":"galeria","src":`images/${galeria[i]}`}))));
      
    }
});