const router = require('express').Router();
const apiRoutes = require('./api');  
const htmlRoutes = require('./html'); 

// handles all api resource requests
router.use('/api', apiRoutes);  

// handles all html resource requests 
router.use('/', htmlRoutes);    

module.exports = router;