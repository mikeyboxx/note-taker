const notes = require('../db/db.json');

// GET request to get all notes
const getNotes = (req,res)=>{
    console.info(`${req.method} request received to send all notes`);
    res.status(200).send(notes);
}

module.exports = getNotes;