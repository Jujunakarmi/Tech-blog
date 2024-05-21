const { Comment } = require('../models');

const commentData = [
  {
    comment_body: 'First Comment',
    user_id: 1,
    post_id: 4,
  },
  {
    user_id: 2,
    post_id: 3,
    comment_body: 'Second Comment',
  },
  {
    user_id: 3,
    post_id: 2,
    comment_body: 'Third Comment',
  },
  {
    user_id: 4,
    post_id: 3,
    comment_body: 'Forth Comment',
  },
  {
    user_id: 5,
    post_id: 4,
    comment_body: 'Fifth Comment',
  },
  {
    user_id: 6,
    post_id: 2,
    comment_body: 'No Comments',
  },
  {
    user_id: 7,
    post_id: 1,
    comment_body: 'Last Comment',
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
