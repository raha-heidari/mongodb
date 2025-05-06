
const Member=require("../model/members.model");

//////////////////////////////////////////////////////////
const getAllFacultyMembers=async(req,res)=>{
try {

const allFacultyMembers=await Member.find();
res.status(200).json(allFacultyMembers);

} catch (error) {
    res.status(500).json({message:error.message})
}

}
////////////////////////////////////////////////////////
const addFacultyMember=async(req,res)=>{
try {
    console.log("Received data:", req.body);
    const addingFacultyMember=await Member.create(req.body);
       

      res.status(201).json({addingFacultyMember});
    
} catch (error) {
    res.status(500).json({message:error.message})
}
}

//////////////////////////////

const deleteFacultyMember=async(req,res)=>{
try {

 const {id}=req.params

 const deletingFacultyMember=await Member.findByIdAndDelete(id);
 if (!deletingFacultyMember) {
    return res.status(404).json({message:"Member not found."})
}
 res.status(202).json({message:"Member deleted succusfully."})
    
} catch (error) {

    res.status(500).json({message:error.message});

}
}
//////////////////////////////////////////

  const updateFacultyMember=async(req,res)=>{

try {
const {id} =req.params
const  updatingFacultyMember=await Member.findByIdAndUpdate(id,req.body,{
new:true,
runValidators:true,
})

if (!updatingFacultyMember) {
    return res.status(404).json({message:"Member not found."})
}

res.status(200).json(updatingFacultyMember);

} catch (error) {
    res.status(500).json({message:error.message})
}
  }

  /////////////////////////////////////////

module.exports={getAllFacultyMembers,addFacultyMember,deleteFacultyMember,updateFacultyMember};