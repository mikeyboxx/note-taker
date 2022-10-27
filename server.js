const express = require('express');
const PORT = process.env.PORT || 3001;   // get port from environment, otherwise default to 3001
const app = express();   // start server
const routes = require('./routes');  // import application routes

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use(routes);  // all of the routes are located in one place

// server is up and running
app.listen(PORT, ()=>{
    console.log(`Server has started... `);
    console.log('Time:', Intl.DateTimeFormat('en-US',{dateStyle: 'long', timeStyle: 'long'}).format(new Date()));
    console.log(`Listening on http://localhost:${PORT}/`);
});


