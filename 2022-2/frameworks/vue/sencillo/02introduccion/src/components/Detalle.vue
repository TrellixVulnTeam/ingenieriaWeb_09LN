<template>
   <span>{{id}}</span>
</template>

<script>
export default{
   props:{
     id:{
       type:Number,
       required:true
     }

   },
    data(){
        return{
           id:null
        }
     },
     created(){
        const id=this.$route.params["id"];
         console.log(id);
         //this.id=id;
     }

}
</script>

<style lang="scss" scoped>

</style>