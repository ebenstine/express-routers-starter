const express = require('express');
//set up an array to store my book objects
const bookList = [];

//Make a router
//A router is like a mini-app, or app inside an app
const router = express.Router();

//we can use a router just like we use an app
//the actual URL is now /book----> see line 23
router.get('/', (req, res) => {
    res.send(bookList);
});
//the actual URL here is /book/first (this would get the first item)
router.get('/first', (req, res) => {
    res.send(bookList[0]);
});

router.post('/book', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

//export our books "mini app"

module.exports = router;