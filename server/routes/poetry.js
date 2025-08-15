const router = require('express').Router();
const Poetry = require('../models/Poetry');
router.get('/', async (req, res) => {
  try {
    const poetry = await Poetry.find().sort({ createdAt: -1 });
    res.json(poetry);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
});
module.exports = router;
