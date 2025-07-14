const Users = require('../models/user');

module.exports.getSignup = (req, res) => {
  res.render('signup', {
    msg: req.flash('msg')
  });
};

module.exports.postSignup = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    let user = await Users.findOne({ username });

    if (user) {
      req.flash('msg', 'User already exists, try another username');
      return res.redirect('/signup');
    }

    // Save plain password; hashing will be done by pre-save hook
    await Users.create({
      username,
      password,
      isAdmin: false
    });

    req.flash('msg', 'Signup Successful');
    return res.redirect('/login');

  } catch (err) {
    next(err);
  }
};
