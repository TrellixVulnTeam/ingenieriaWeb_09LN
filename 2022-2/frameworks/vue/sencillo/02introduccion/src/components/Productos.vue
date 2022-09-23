<template>
    <ul> 
       <li v-for="items in productos" v-if="items.stock>0">
           <img :src="'./img/'+items.src">
           <h2>{{items.titulo}}</h2>
           <router-link :to="/detalle/+items.id">Ver</router-link to>
       </li>
    </ul>
</template>



<style>
  ul{
     display:flex;


  } 
  ul li{
  flex-wrap:wrap;
  margin:10px;
  list-style-type:none;

  }

  ul li img{
    width:150px;
  }

</style>

<script> 
   

   export default{
    data(){
        return {
           productos:[
        {
            id:1,
            src:"1.png",
            titulo:"Imagen 1",
            stock: 1
        },
        {
            id:2,
            src:"2.png",
            titulo:"Imagen 2",
            stock:2
        }
        ]
        }
    }

   }
</script>