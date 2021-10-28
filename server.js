'use strict';
// grab the packages we need
const express = require('express');
const app = express();
const port = process.env.PORT || 80;
var sleep = require('thread-sleep');

// routes will go here
app.get('/api/add', function(req, res) {
  let a = parseFloat(req.param('a'),10);
  let b = parseFloat(req.param('b'),10);
  sleep(1000); // ARTIFICIAL CPU INTENSIVE
  res.status(200).json(a+b);
});

app.get('/api/fib', function(req, res) {
  let a = parseFloat(req.param('a'),10);
  sleep(1000); // ARTIFICIAL CPU INTENSIVE
  res.status(200).json(fib(a));
});



var fib = function(n) {
  if (n === 1) {
    return [0, 1];
  } else {
    var arr = fib(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
};

// routes will go here
app.get('/api/sqrt', function(req, res) {
  let a = parseInt(req.param('a'),10);
  sleep(5); // ARTIFICIAL CPU INTENSIVE
  res.status(200).json(Math.sqrt(a));
});


// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);