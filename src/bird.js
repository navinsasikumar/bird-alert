/*jshint node: true*/

var bird = module.exports;

bird.find = function (searchTerm, callback) {
    'use strict';

    var mongoose = require('mongoose');
    var bird = mongoose.model('Bird');

    bird.find({ commonName: /^bald/i}, function(err, birds) {
        if (err) {
            return callback(err, null);
        }
        console.log(birds);
        return callback(false, birds);
    });

};
