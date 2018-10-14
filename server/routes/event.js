const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

router.get('/',(req,res,next) => {
  Event.find()
      .then( objEvent => res.status(200).json(objEvent))
      .catch(e => next(e))
})

router.post('/',(req,res,next) => {
  const { startDate, endDate, startTime, endTime, title, description} = req.body;
  const children = req.child._id
  
  Event.create({
      children,
      startDate,
      endDate,
      startTime,
      endTime,
      title,
      description,
    //   comment,
    //   parentCreated: req.user._id
  })
      .then( objEvent => res.status(200).json(objEvent))
      .catch(e => next(e))
})

router.put('/:id', (req, res, next)=>{
  Event.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({message: `Event with ${req.params.id} is updated successfully.`});
    })
    .catch(err => {
      res.json(err);
    })
})

router.delete('/:id', (req, res, next)=>{
  Event.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json({message: `Event with ${req.params.id} is removed successfully.`});
    })
    .catch( err => {
      res.json(err);
    })
})


module.exports = router;



// router.post('/', (req, res, next) => {
//   const { startDate, endDate, startTime, endTime, title, description, comment } = req.body;

//  User.findOne({name})
//   .then( createdEvent => {
//     if (createdEvent) throw new Error('Event already exists');

//     return new Event({
//       children: req.child.name,
//       startDate,
//       endDate,
//       startTime,
//       endTime,
//       title,
//       description,
//       comment,
//       parentCreated: req.user.name
//     }).save()

//   .then(event => res.json({status: 'success', event }))
//   .catch(e => console.log(e))
//     })
//   }) 

//   module.exports = router;
//--------------------------------------------------------

