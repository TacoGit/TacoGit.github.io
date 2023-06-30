const express = require('express');
const router = express.Router();

const path = require('path')

var app = express();

app.use(express.json());
app.use(express.static(__dirname + "/"));
app.use(express.static("public"));

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/', router);

app.use(function(req, res, next) {
  res.status(404);
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function() {
  console.log("App server is running on port 3000");
  console.log("to end press Ctrl + C");
});