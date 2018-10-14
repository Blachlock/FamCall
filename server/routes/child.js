const express = require('express');
const router = express.Router();
const Child = require('../models/Child');

router.get('/',(req,res,next) => {
  Child.find()
      .then( objChild => res.status(200).json(objChild))
      .catch(e => next(e))
})

router.post('/',(req,res,next) => {
  const { name, birthday } = req.body;
  Child.create({
    name,
    birthday
  })
      .then( objChild => res.status(200).json(objChild))
      .catch(e => next(e))
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