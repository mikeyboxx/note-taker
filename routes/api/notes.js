const router = require('express').Router();
const postNote = require('../../controllers/postNote');
const deleteNote = require('../../controllers/deleteNote');
const getNotes = require('../../controllers/getNotes');

// GET request to get all notes
router.get('/', getNotes);

// POST request to add a note
router.post('/', postNote);

// DELETE request to delete a note 
router.delete('/:id', deleteNote);

module.exports = router;