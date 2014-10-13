/*jshint node: true*/

var sighting = require('../src/sighting.js');
var util = require('../src/util.js');

exports.record = function(req, res) {
    'use strict';
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');

    var args = req.body;
    sighting.record(args, function printResponse(err, data){
        if (!err) {
            res.send(data);
        } else {
            res.send(util.errorReturn(err));
        }
    });

};
