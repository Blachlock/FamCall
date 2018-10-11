const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Couple = require('../models/Couple');
const Invitation = require('../models/Invitation');
const sendMail = require('../mail/sendMail');
require('dotenv').config();


/* localhost:3001/calendar/sendInvite */
router.post('/sendInvite', (req, res, next) => {
  const { from, to, phone } = req.body;
 

 User.findOne({email: to})
  .then( parentTwo => {
    console.log(parentTwo)
    if (!parentTwo) throw new Error('We cannot send invites to unregistered users');
    if (phone !== parentTwo.phone) throw new Error('Not the same phone number');

    return new Invitation({
      from,
      to,
      phone
    }).save()
    .then( createdInvite => {
      // console.log(createdInvite)
      // console.log(parentTwo)

      sendMail(
        createdInvite.from,
        createdInvite.to,
        'Confirmation email',
        `Please confirme your account clicking the following link: <a href='http://localhost:3000/calendar/${createdInvite._id}'>HERE</a>`
      )

      return new Couple ({
        couple: createdInvite._id,
        parentOne: req.user._id,
        parentTwo,
      }).save()
      .then(invitation => res.json({status: 'success', invitation }))
      .catch(e => console.log(e))
    })
  }) 
  
});


router.get('/:coupleId', (req, res, next) => {
  let coupleId = req.params.coupleId
  Couple.findOne({couple: coupleId})
    .then(calendario => res.json(calendario))
    .catch(e => console.log(e))
})


module.exports = router;