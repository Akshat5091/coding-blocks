module.exports.getLogin = (req, res) => {
  // If already logged in, redirect to profile
  if (req.session.user) {
    return res.redirect('/profile');
  }

  // Render the login page with flash messages
  res.render('login', {
    msg: req.flash('msg'),      // Custom messages (optional)
    error: req.flash('error')   // Passport error messages (e.g., "Incorrect password")
  });
};
