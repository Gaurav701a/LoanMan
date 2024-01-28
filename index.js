const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const bodyparser=require("body-parser");
const ConnectDB=require("./config/db");
const path=require("path");

const PORT=process.env.PORT;
const app=express();

// for connectinos and dotenv file
dotenv.config(); 
ConnectDB();


// middlewares used 
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'./client/build')));

// app.get("/",(req,res)=>{
//     res.send("first api");

// })
// C:\Users\harsh\OneDrive\Desktop\js revison\Bankapi\client\build\index.html
app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
})
// default route for user login and register 
app.use("/user",require("./routes/router"));
app.use("/borrower",require("./routes/brouter"));


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})