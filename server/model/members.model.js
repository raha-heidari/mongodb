const mongoose=require("mongoose");

const membersSchema= new mongoose.Schema({

name:{
type:String,
required:true,
},


age:{
    type:Number,
    required:true,
},

gender:{
type:String,

required:true
},


exp:{
type:Number,
required:true,
},



type:{
    type:String,
  
    required:true,
},


qualification:{
    type:String,
    required:true,
}


})



const Member=mongoose.model("Member", membersSchema);

module.exports=Member;