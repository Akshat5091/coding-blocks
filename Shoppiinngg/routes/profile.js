const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (!req.user) return res.redirect('/login');

  res.render('profile', {
    username: req.user.username,        // ✅ corrected from email
    isAdmin: req.user.isAdmin,
    cartCount: req.user.cart?.products?.length || 0
  });
});

module.exports = router;
