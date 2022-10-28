const {writeToFile} = require('../utils/fsUtils.js');
const notes = require('../db/db.json');

// POST request to delete a note
const deleteNote = (req,res)=>{
    console.info(`${req.method} request to delete a note`);

    // validate the params
    if (req.params.id) {
        //find the index of the note to be deleted
        const idx = notes.findIndex(note => note.id === req.params.id);
       
        // if not found, send an error back
        if (idx === -1){
            res.status(500).send('Error in posting note. Id to be deleted is not found.');
        } else {
            // construct our own response object with the deleted data 
            const response = {
                status: 'success',
                type: 'DELETE',
                data: notes[idx],
            };

            notes.splice(idx,1); // delete the note from array

            // save array as json string, in db.json file 
            writeToFile('./db/db.json', JSON.stringify(notes, null, 4))
                .then(()=>{
                    console.info(`\n${req.params.id} has been deleted from ./db/db.json`);  
                    res.status(201).send(response); 
             })
                .catch(err=>{
                    console.error(err);
                    res.status(500).send(err.message);
             })
        }
    }
};

module.exports = deleteNote;