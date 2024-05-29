const { Post } = require('../models');

const postData = [
  {
    title: 'Guitars',
    user_id: 1,
    post_body:
      'Guitars are awesome',
  },
  {
    title: 'Drums',
    user_id: 2,
    post_body:
      'Drum beats are sick',
  },
  {
    title: 'Keyboard',
    user_id: 3,
    post_body:
      'I dont know how to play it',
  },
  {
    title: "Microphone",
    user_id: 4,
    post_body:
      'I love mics',
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
