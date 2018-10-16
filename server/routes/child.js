const express = require('express');
const router = express.Router();
const Child = require('../models/Child');
const Couple = require("../models/Couple")


router.get('/',(req,res,next) => {
  Child.find()
      .then( objChild => res.status(200).json(objChild))
      .catch(e => next(e))
})


router.post('/',(req,res,next) => {
  // console.log(req.body)
  let { name, birthday } = req.body;

  const newChild = {
    name,
    birthday
  }
  console.log(req.user._id)
  const savedChild = new Child(newChild)
  savedChild.save()
  .then(createChild => {
    Couple.findOneAndUpdate({$or:[{parentOne:req.user._id},{parentTwo:req.user._id}]}, {$push:{child:createChild._id}}, {new:true})
    .then(couple => {console.log(couple);res.status(200).json(couple)})
    .catch(err => next(err))
  })
  .catch(e => console.log(e))
  
})


router.put('/:id', (req, res, next)=>{
  Child.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({message: `Child with ${req.params.id} is updated successfully.`});
    })
    .catch(err => {
      res.json(err);
    })
})


router.delete('/:id', (req, res, next)=>{
  Child.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json({message: `Child with ${req.params.id} is removed successfully.`});
    })
    .catch( err => {
      res.json(err);
    })
})




module.exports = router;