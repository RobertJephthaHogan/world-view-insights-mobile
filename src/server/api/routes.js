const express = require('express');
const router = express.Router();


// Example route
router.get('/test', (req, res) => {
    res.send('This is an test route');
});



module.exports = router;