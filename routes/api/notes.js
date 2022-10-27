const router = require('express').Router();
const {v4: uuidv4} = require('uuid');
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

        // construct response object 
        const response = {
            status: 'success',
            data: newNote,
          };

        // return the response object    
        res.status(201).send(response); //
    } else {
        res.status(500).json('Error in posting note');
    }
});

module.exports = router;