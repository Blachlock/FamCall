const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Event = require('../models/Event')

router.post('/', (req, res, next) => {
  const { startDate, endDate, startTime, endTime, title, description, comment } = req.body;

 User.findOne({name})
  .then( createdEvent => {
    if (createdEvent) throw new Error('Event already exists');

    return new Event({
      children: req.child.name,
      startDate,
      endDate,
      startTime,
      endTime,
      title,
      description,
      comment,
      parentCreated: req.user.name
    }).save()

  .then(event => res.json({status: 'success', event }))
  .catch(e => console.log(e))
    })
  }) 

  module.exports = router;