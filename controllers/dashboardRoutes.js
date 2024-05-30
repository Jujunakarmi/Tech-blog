const router = require('express').Router();
const { Post, User, Comment } = require('../models');

//will show post created by logged in user
router.get('/',async (req, res) => {
  try {
const postData = await Post.findAll({
  where:{
    user_id: req.session.user_id,
  },
  attributes: ['id', 'title', 'post_body', 'user_id'],

  include:[
    {model: Comment,
      attributes: ['id', 'comment_body', 'user_id','post_id'],

      include: {
        model: User,
      attributes:['username']
      },
    },
  {
    model:User,
    attributes:['username']
  }
  ]
})
  
const posts = postData.map(((post) => post.get({plain:true})));
res.render('dashboard', {posts, logged_in: true})
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;