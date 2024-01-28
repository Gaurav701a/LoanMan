const Borrow=require("../models/borrow");

const loanrequest=async(req,res)=>{
    try {
        const {loanPurpose,loanAmount}=req.body;

        if(!loanPurpose || !loanAmount){
            res.status(400).json({message:"Missing values",success:false});
        }

        await Borrow.create({loanPurpose,loanAmount});

        res.status(200).json({message:"request sended successfully",success:true});

        


        
    } catch (error) {
        res.status(500).json({message:"request failed",success:true});

    }
}


module.exports=loanrequest;