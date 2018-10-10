const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Couple = require('../models/Couple');
const Invitation = require('../models/Invitation');
const sendMail = require('../mail/sendMail');


/* localhost:3001/calendar/sendInvite */
router.post('/sendInvite', (req, res, next) => {
  const { from, to, phone } = req.body;
  // Check if invitation code (phone) is correct
  Invitation.findOne({ phone })
    .then(foundInvitation => {
      if (foundInvitation) throw new Error('Phone already exists');

      return new Invitation({
        from,
        to,
        phone
      }).save();
    })
    .then(invitation => res.json({
      status: 'invitation send successfully', invitation 
    }))
    .then(invitation => {
      sendMail(
        to.email,
        'Confirmation email',
        `Please confirme your account clicking the following link: <a href='http://localhost:3001/auth/confirm/${invitation._id}'>HERE</a>`
      )
    })
    .catch(e => next(e));
});




router.get('/calendar/:id', (req, res, next) => {
  Couple.findById(req.params.id)
    .then(calendario => res.json(calendario))
})


module.exports = router;
