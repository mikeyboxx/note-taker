const router = require('express').Router();
const {v4: uuidv4} = require('uuid');
const fs = require('fs');
const notes = require('../../db/db.json');

// GET request to get all notes
router.get('/', (req,res)=>{
    console.info(`${req.method} request received to send all notes`);
    res.status(200).send(notes);
})

// POST request to add a note
router.post('/', (req,res)=>{
    console.info(`${req.method} request received to add a note`);
    
    // deconstruct request body
    const {
        title,
        text
    } = req.body;
    
    // validate text and title, if valid, then create new object, else send back an error
    if (title && text){
        const newNote = {
            id: uuidv4(),  // generate a unique identifier
            title,
            text
        } 
        // push to global notes array
        notes.push(newNote); 

        // construct our own response object 
        const response = {
            status: 'success',
            type: 'ADD',
            data: newNote,
        };

        // save array as json string, in db.json file  
        fs.writeFile('./db/db.json', JSON.stringify(notes, null, 4), (err) => {
            if (err){
                console.error(err);
                res.status(500).send(err.message);
            } else {
                console.info(`\nData written to ./db/db.json`);
                res.status(201).send(response); // return our own response object
            }
        });
    } else {
        res.status(500).json('Error in posting note');
    }
});


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