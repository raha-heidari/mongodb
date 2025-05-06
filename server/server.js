const express=require("express");
const dotenv=require("dotenv").config();
const cors=require("cors");
const connectDB=require("./db/connectDB");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

const membersRoutes=require("./routes/members.route");

app.use("/",membersRoutes);


const port=process.env.PORT || 5000;

const start=async()=>{
await connectDB(process.env.MONGO_URI);
console.log(`Server is connected to MongoDB.`);
app.listen(port,()=>{

console.log(`Server is running on port ${port}`);


})

}

start();