const express = require('express');

//Make a router
//A router is like a mini-app, or app inside an app
const router = express.Router();

//we can use a router just like we use an app
router.get('book', (req, res) => {
    res.send(bookList);
});

router.post('/book', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

//export our books "mini app"

module.exports = router;