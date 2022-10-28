const router = require('express').Router();
const {v4: uuidv4} = require('uuid');
const fs = require('fs');
const notes = require('../../db/db.json');
const postNote = require('../../controllers/postNote.js');
const deleteNote = require('../../controllers/deleteNote.js');

// GET request to get all notes
router.get('/', (req,res)=>{
    console.info(`${req.method} request received to send all notes`);
    res.status(200).send(notes);
})

// POST request to add a note
router.post('/', postNote);

// DELETE request to delete a note
router.delete('/:id', deleteNote);

module.exports = router;