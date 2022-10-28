const router = require('express').Router();
const postNote = require('../../controllers/postNote.js');
const deleteNote = require('../../controllers/deleteNote.js');
const getNotes = require('../../controllers/getNotes.js');

// GET request to get all notes
router.get('/', getNotes);

// POST request to add a note
router.post('/', postNote);

// DELETE request to delete a note
router.delete('/:id', deleteNote);

module.exports = router;