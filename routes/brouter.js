const express=require("express");
const loanrequest=require("../controllers/logic2");
const router=express.Router();


router.post('/request',loanrequest);



module.exports=loanrequest;