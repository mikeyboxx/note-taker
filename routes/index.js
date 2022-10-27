const router = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./html');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

module.exports = router;


// HTML routes
//  GET :  / - returns index.html
//  GET :  /notes - returns notes.html

// API routes
// GET     -  /api/notes/  - returns an array
// POST    - /api/notes/
// DELETE  - /api/notes/:id

