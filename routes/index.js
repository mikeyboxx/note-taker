const router = require('express').Router();
const apiRoutes = require('./api');  
const htmlRoutes = require('./html'); 

router.use('/api', apiRoutes);  // handles all api resource requests
router.use('/', htmlRoutes);    // handles all html requests 

module.exports = router;