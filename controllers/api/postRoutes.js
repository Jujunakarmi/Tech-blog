const router = require('express').Router();





router.post('/',(req, res) => {
    try {
     res.send('Post')
    } catch (err) {
      res.status(400).json(err);
    }
  });
  


module.exports = router;
