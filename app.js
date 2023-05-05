// var express = require('express');
// var path = require('path');

// var app = express();

// app.use(express.static(path.join(__dirname, 'view')));

// app.listen(8000, '0.0.0.0', function() {});

// module.exports = app;


const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let list = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/insert', (req, res) => {
    let value = req.body.value;
    if (value === '') {
        res.send('Please provide a valid input');
    } else {
        list.push(value);
        res.send('Success');
    }
});

app.listen(3000, () => console.log('Server started on port 3000'));