const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express(); // star server

const routes = require('./routes');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(routes);




// server is up and running
app.listen(PORT, ()=>{
    console.log(`Server has started... `);
    console.log('Time:', Intl.DateTimeFormat('en-US',{dateStyle: 'long', timeStyle: 'long'}).format(new Date()));
    console.log(`Listening on http://localhost:${PORT}/`);
});


