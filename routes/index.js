const { randomUUID } = require('crypto');
var express = require('express');
var router = express.Router();
var os = require('os');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    hostname: os.hostname(),
    version: process.env.npm_package_version,
    randomtext: randomUUID
  });
});

module.exports = router;
