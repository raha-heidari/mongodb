const express=require("express");

const router=express.Router();

const {getAllFacultyMembers,addFacultyMember,deleteFacultyMember,updateFacultyMember}=require("../controllers/members.controller");


router.get("/member",getAllFacultyMembers);
router.post("/member",addFacultyMember);
router.delete("/member/:id",deleteFacultyMember);
router.patch("/member/:id",updateFacultyMember);

module.exports=router;