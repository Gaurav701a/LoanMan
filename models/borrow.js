const mongoose =require("mongoose");



const borrowSchema=mongoose.Schema({
    // borrowerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    loanAmount:{
        type:String,
        require:true
    },
    loanPurpose:{
        type:String,
        require:true
    },
    status:{
        type:String,
        enum: ['pending', 'accepted', 'rejected'],
        default:"pending"
    }

},{
    timestamps:true
})


const Borrow=mongoose.model("Borrow", borrowSchema);

module.exports=Borrow;