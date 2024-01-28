const mongoose=require("mongoose");
const MongoUrl="mongodb://localhost:27017/bankapi";
const ConnectDB=async()=>{
    try {
        await mongoose.connect(MongoUrl);

        console.log("Server is running successfully");
        
    } catch (error) {
        console.log("Failed to run server",error);
        
    }

}

module.exports=ConnectDB;