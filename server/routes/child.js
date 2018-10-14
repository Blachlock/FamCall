const express = require('express');
const router = express.Router();
const Child = require('../models/Child');

router.get('/child',(req,res,next) => {
  Child.find()
      .then( objChild => res.status(200).json(objChild))
      .catch(e => next(e))
      
})

router.post('/child',(req,res,next) => {
  const { name, birthday } = req.body;
  console.log(name, birthday, "entra");
  console.log(req.body);
  
  Child.create({
    name,
    birthday
  })
      .then( objChild => res.status(200).json(objChild))
      .catch(e => next(e))
})

module.exports = router;