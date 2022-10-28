const router = require('express').Router();
const path = require('path');

// returns the notes.hmtl file
router.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../../public/notes.html')));

// default is to send the index.html file
router.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../public/index.html')));

module.exports = router;