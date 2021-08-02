const express = require('express');
const bodyParser = require('body-parser');

//this was also moved to router, since this server file doesn't need it.
//const bookList = [];

const booksRouter = require('./routes/books.router')
const app = express();
const PORT = process.env.PORT || 5000;

const movieList = [];

// express static file serving - public is the folder name
app.use( express.static('server/public') );

// Setup body parser for POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Tell my express app to use my booksRouter mini app
//my book mini-app lives inside my 'book' url
app.use('/book', booksRouter)

// Start server listening on PORT
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
})

// TODO - Move these routes to their own modules!
// This code got moved to router
/*app.get('/book', (req, res) => {
    res.send(bookList);
});

app.post('/book', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

app.get('/movie', (req, res) => {
  res.send(movieList);
});*/

app.post('/movie', (req, res) => {
  movieList.push(req.body);
  res.sendStatus(200);
});
