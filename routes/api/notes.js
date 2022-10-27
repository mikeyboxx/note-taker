const router = require('express').Router();
const notes = require('../../db/db.json');

router.get('/', (req,res)=>{
    res.send(notes);
})

module.exports = router;