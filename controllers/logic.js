const User=require("../models/User")
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const JWT_SECRET="123";

const Signin=async(req,res)=>{
  try {
    const existuser=await User.findOne({email: req.body.email});

    if(!existuser){
      res.status(401).json({message:"Email not match",success:false});
    }

  

    if(existuser.password!==req.body.password){
      res.status(401).json({message:"Password not match",success:false});

    }
    const token = jwt.sign(
      { id: existuser._id },
      JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    res.status(200).json({message:"Login Success",success:true,token});
    
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Login failed",success:false});
    
  }

}

const SignUp=async(req,res)=>{
    try {
        const existuser = await User.findOne({ email: req.body.email });
        if (existuser) {
          res
            .status(201)
            .send({ message: "user already regsiter", success: false });
        }
        // const password = req.body.password;
        // const salt = await bcrypt.genSalt(10);
        // const hashedpassword = await bcrypt.hash(password, salt);
        // req.body.password = hashedpassword;
        const newuser = new User(req.body);
        await newuser.save();
        res.status(200).send({ message: "register succesfully", success: true });
      } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "cannot register" });
      }
}


module.exports={SignUp,Signin};