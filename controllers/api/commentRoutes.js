const router = require('express').Router();


router.get('/',(req, res) => {
  try {
   res.send('comment')
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
