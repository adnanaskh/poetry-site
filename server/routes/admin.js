const router = require('express').Router();
const Poetry = require('../models/Poetry');
// NOTE: Add JWT auth middleware for production security.
// For example:
// const auth = require('../middleware/auth');
// router.post('/add', auth, async (req, res) => { ... });

// Add Poetry
router.post('/add', async (req, res) => {
    const { title, urduText, englishText, image } = req.body;
    try {
        const newPoetry = new Poetry({ title, urduText, englishText, image });
        const poetry = await newPoetry.save();
        res.json(poetry);
    } catch (err) { res.status(500).send('Server Error'); }
});
// Edit Poetry
router.put('/edit/:id', async (req, res) => {
    try {
        const poetry = await Poetry.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(poetry);
    } catch (err) { res.status(500).send('Server Error'); }
});
// Delete Poetry
router.delete('/delete/:id', async (req, res) => {
    try {
        await Poetry.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Poetry deleted' });
    } catch (err) { res.status(500).send('Server Error'); }
});
module.exports = router;