const express = require('express');
const router = express.Router();
const passport = require('../auth/passport');
const loginController = require('../controllers/login');

// Show login form
router.get('/', loginController.getLogin);

// Local login
router.post('/',
  passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
  }),
  (req, res) => {
    req.session.user = {
      id: req.user._id,
      username: req.user.username,
      isAdmin: req.user.isAdmin
    };
    res.redirect('/profile');
  }
);

module.exports = router;
