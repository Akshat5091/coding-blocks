module.exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('msg', 'You must be logged in to view this page');
  res.redirect('/login');
};
