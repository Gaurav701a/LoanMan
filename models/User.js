const mongoose=require("mongoose");


const userSchema=mongoose.Schema({
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        enum: ['admin', 'borrower', 'lender'],
        default:"borrower"
    }
})


const User=mongoose.model("User",userSchema);

module.exports=User;