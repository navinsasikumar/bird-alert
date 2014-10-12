/*jshint node: true*/

var bird = module.exports;

bird.find = function (searchTerm, callback) {
    'use strict';

    var mongoose = require('mongoose');
    var bird = mongoose.model('Bird');
    var rePattern = new RegExp(searchTerm, 'i');

    bird.find({ commonName: rePattern}, function(err, birds) {
        if (err) {
            return callback(err, null);
        }
        return callback(false, birds);
    });

};
