const express = require('express');
const router = express.Router();
const Couple = require("../models/Couple")

router.get('/getCouple',(req,res,next) => {
  userId = req.user._id
  Couple.find({parentOne:req.user._id})
  .populate("parentOne")
  .populate("parentTwo")
  .populate("events")
  .populate("child")
  .then( foundCouple => {

    foundCouple.forEach((couple,i) =>{
        console.log(i);
    // if(req.user._id == couple.parentOne._id || req.user._id == couple.parentTwo._id){
        res.status(200).json(couple)

      // } 
    })

    })
    .catch(e => console.log("this is the error", e))
})

module.exports = router;