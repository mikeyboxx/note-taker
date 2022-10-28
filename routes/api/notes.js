const router = require('express').Router();
const {v4: uuidv4} = require('uuid');
const fs = require('fs');
const notes = require('../../db/db.json');
const postNote = require('../../controllers/postNote.js');

// GET request to get all notes
router.get('/', (req,res)=>{
    console.info(`${req.method} request received to send all notes`);
    res.status(200).send(notes);
})

// POST request to add a note
router.post('/', postNote);


router.delete('/:id', (req,res)=>{
    console.info(`${req.method} request delete a note`);

    if (req.params.id) {
        const idx = notes.findIndex(el=> el.id === req.params.id);
        if (idx === -1){
            res.status(500).json('Error in posting note. Id to be deleted is not found.');
        } else {
            const response = {
                status: 'success',
                type: 'DELETE',
                data: notes[idx],
            };
            notes.splice(idx,1);
            // save array as json string, in db.json file  
             fs.writeFile('./db/db.json', JSON.stringify(notes, null, 4), (err) => {
                if (err){
                    console.error(err);
                    res.status(500).send(err.message);
                } else {
                    console.info(`\nId: ${req.params.id} has been deleted from ./db/db.json`);  
                    res.status(201).send(response); // return our own response object
                }
            })
        }
    }
});

module.exports = router;