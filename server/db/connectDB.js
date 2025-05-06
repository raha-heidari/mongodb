const mongoose=require("mongoose");

const connectDB=async(uri)=>{

try {
await mongoose.connect(uri);
console.log("Connected to MongoDB.");

} catch (error) {
    console.log(error);
    process.exit(1);
    
}

}


module.exports=connectDB;

