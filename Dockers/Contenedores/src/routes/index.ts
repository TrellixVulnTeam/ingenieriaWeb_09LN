const {Router}=require("express");
const router=Router();

router.get('/',(req:any,res:any)=>{
  res.json("hola mundo");
});
module.exports=router;