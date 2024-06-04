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

router.get('/create', async (req, res) => {
  
try{
  const newPost = await Post.findAll({
    where: {
      //use the id from session
      user_id: req.session.user_id,
    },
    attributes :['id', 'title','post_body','user_id'],

    include:[
      {
        model:Comment,
        attributes:['id','comment_body', 'user_id', 'post_id']
      },
      {
        model: User,
        attributes:['username']
      }
    ]
  });

  //use map and get methid to serialize data before passing to handlebar

  const posts = newPost.map((post) => post.get({plain:true}));;
  res.render('add-post', {posts, logged_in:true}
);
}catch(err){
  console.log(err)
  res.status(500).json(err)
}
// res.send('hi')
});
module.exports = router;