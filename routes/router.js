const {SignUp,Signin}=require("../controllers/logic");
const express=require("express");

const router=express.Router();


router.post("/regsiter",SignUp);

router.post("/login",Signin);


module.exports=router;