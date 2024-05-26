const router = require('express').Router();
const {User, Post, Comment} = require('../models');



router.get('/', async(req, res) => {
  try {
 const postData = await Post.findAll({
  attributes:['id','title','post_body','created_at', 'updated_at'],
  include: [
    {
      model: Comment,
      attributes: [
        'id', 'comment_body', 'user_id','post_id', 'created_at'
      ],
      include:{
        model: User,
        attributes: ['username']
        }
    },
    {
      model: User,
      attributes: ['username'],
    },
  ],
 });
 const posts= postData.map((post) => post.get({ plain:true }));
 res.render('homepage', {
  posts,
  // logged_in: req.session.logged_in,
 });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render('signup');
});


module.exports = router;