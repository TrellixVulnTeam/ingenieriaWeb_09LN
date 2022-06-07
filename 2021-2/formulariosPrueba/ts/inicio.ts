/*import jquery=require('jquery');
const $:JQueryStatic=jquery;*/
// Example starter JavaScript for disabling form submissions if there are invalid fields




let formulario:any=document.getElementById("formulario");
formulario.addEventListener("submit",function(event:any){
      
let nombre:any=document.getElementById("nombrecompleto");
console.log(nombre.value);
event.preventDefault()
});



/*
(function () {

  let entrada:any=document.getElementById("rut");
  console.log(entrada.value);


  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  let forms = document.querySelectorAll('.needs-validation')


  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event:any) {
    
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()*/