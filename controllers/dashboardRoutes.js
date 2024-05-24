const router = require('express').Router();



router.get('/',(req, res) => {
  try {
res.send('Dashboard')
  
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;