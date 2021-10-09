let clima=[{
    "id": 1, // Valparaiso
    "nombre":"Valparaiso",
    "clima":[
 {
       "dia":1,
       "tipo":"nublado"},
       {"dia":2,
       "tipo":"soleado" 
       },
       {"dia":3,
       "tipo":"lluvioso"
       },
       {"dia":4,
       "tipo":"lluvioso"
       },
       {"dia":5,
       "tipo":"lluvioso"
       },
       {"dia":6,
       "tipo":"lluvioso"
       },
       {"dia":7,
       "tipo":"lluvioso"
       }]},
{
 "id": 2, //metropolitana
 "nombre":"Metropolitana",
 "clima":[{
    "dia":1,
    "tipo":"soleado"},
    {"dia":2,
    "tipo":"soleado" 
    },
    {"dia":3,
    "tipo":"lluvioso"
    },
    {"dia":4,
    "tipo":"lluvioso"
    },
    {"dia":5,
    "tipo":"lluvioso"
    },
    {"dia":6,
    "tipo":"lluvioso"
    },
    {"dia":7,
    "tipo":"lluvioso"
    }]}
];


function menu(){

    let menu:any=document.getElementById("menu");
    let seccion:any=document.getElementById("contenido");
    let cabeza:any=document.getElementsByTagName("div")[0];

    let variable:string="";
    let semana:string="";

    for(let i=0;i<clima.length;i++){
       
        let li:any=document.createElement("li");
        menu.appendChild(li).innerHTML="<a href='#' id='"+clima[i].id+"'>"+clima[i].nombre+"</a>";
        
        li.addEventListener("click",function(){


     //remover hijos de section
     let e=document.querySelector("section");
     let child=e?.lastElementChild;
 
     while(child){
         e?.removeChild(child);
         child=e?.lastElementChild;
     }
     //fin de hijos
     //remover hijos h1
     let e1=document.querySelector("div");
     let child1=e1?.lastElementChild;
 
     while(child1){
         e1?.removeChild(child1);
         child1=e1?.lastElementChild;
     }//remover hijos h1


              let ul:any=document.createElement("ul");
              let h1:any=document.createElement("h1");
              cabeza.appendChild(h1).innerHTML="Chile - "+clima[i].nombre;
              seccion.appendChild(ul);
              for(let j=0;j<clima[i].clima.length;j++){
                let li:any=document.createElement("li");
                
                switch(clima[i].clima[j].dia){
                    case 1:
                        semana="Lunes";
                        break;
                    case 2:
                        semana="Martes";
                        break;
                    case 3:
                        semana="Miércoles";
                        break;
                    case 4:
                        semana="Jueves";
                        break;
                    case 5: 
                        semana="Viernes";
                        break;
                    case 6: 
                        semana="Sábado";
                        break;
                    case 7:
                        semana="Domingo";
                        break;
                }
                ul.appendChild(li).innerHTML=semana+"<br><img src='imagenes/"+clima[i].clima[j].tipo+".png' width='50' height='50'>";
              }

          });
    }
}

window.addEventListener("load",menu);
