const router = require('express').Router();
const{User, Post, Comment} = require('../../models') 


// Sign Up / Create user ====================================================================
router.post('/signup', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.username = newUser.username;
      req.session.email = newUser.email
      req.session.logged_in = true;
      req.session.username = req.body.username;
      res.status(200).json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//Create User
//POST /api/users
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.email = userData.email
      req.session.logged_in = true;
      res.json({ user: userData, message: "You are now logged in!" });

    })
    res.status(200).json(userData)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
});

module.exports = router;
