module.exports.isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user && req.user.isAdmin) {
    return next();
  }
  req.flash('msg', 'Admin access only');
  res.redirect('/shop');
};
