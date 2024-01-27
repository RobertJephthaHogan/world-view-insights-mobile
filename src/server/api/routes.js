const express = require('express');
const router = express.Router();


// Example route
router.get('/test', (req, res) => {
    res.send('This is an test route');
});

// Import service-specific routes
const userRoutes = require('./user.routes');

// Use service-specific routes
router.use('/user', userRoutes);

module.exports = router;