/*jshint node: true*/

var bird = require('../src/bird.js');
var util = require('../src/util.js');

exports.find = function(req, res) {
    'use strict';
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');

    var searchTerm = req.params.searchTerm;
    bird.find(searchTerm, function printResponse(err, data){
        if (!err) {
            res.send(data);
        } else {
            res.send(util.errorReturn(err));
        }
    });

};
