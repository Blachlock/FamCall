const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const Child = require('../models/Child');
const Couple = require("../models/Couple")

router.get('/',(req,res,next) => {
  Event.find()
  .populate('parentCreated')
    .then( objEvent => {
      objEvent.forEach((elem) => console.log(elem.parentCreated.name)) //debería ser en el front!! con .map
      return res.status(200).json(objEvent)
    })
    .catch(e => console.log("this is the error", e))
})


router.post('/',(req,res,next) => {
  console.log(req.body)
  let { parentCreated, startDate, endDate, startTime, endTime, title, description} = req.body;
  const child = req.body.name
  console.log(startDate)
  console.log(endDate)

  const newEvent = {
    parentCreated,
    startDate,
    endDate,
    startTime,
    endTime,
    title, 
    description
  }
  console.log(req.user._id)
  const savedEvent = new Event(newEvent)
  savedEvent.save()
  .then(eventoCreado => {
    Couple.findOneAndUpdate({$or:[{parentOne:req.user._id},{parentTwo:req.user._id}]}, {$push:{events:eventoCreado._id}}, {new:true})
    .then(couple => {console.log(couple);res.status(200).json(couple)})
    .catch(err => next(err))
  })
  .catch(e => console.log(e))
  
})


router.put('/:id', (req, res, next)=>{
    const { startDate, endDate, startTime, endTime } = req.body;

  Event.findByIdAndUpdate(req.params.id, {startDate, endDate, startTime, endTime})
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

router.get('/oneEvent/:id',(req,res,next) => {
  let eventId = req.params.id
  Event.findById(eventId)
  .populate('parentCreated')
  .then( oneEvent => {
    console.log(oneEvent.startDate)
    console.log(oneEvent.parentCreated)
        return res.status(200).json(oneEvent)
    })
    .catch(e => console.log("this is the error", e))
})




 module.exports = router;



// router.post('/', (req, res, next) => {
//   const { startDate, endDate, startTime, endTime, title, description, comment } = req.body;

//  User.findOne({name})
//   .then( createdEvent => {
//     if (createdEvent) throw new Error('Event already exists');

//     return new Event({
//       child: req.child.name,
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

