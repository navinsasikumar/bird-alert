/*jshint node: true*/

var sighting = module.exports;

sighting.record = function (args, callback) {
    'use strict';

    var mongoose = require('mongoose');
    var sighting = mongoose.model('Sighting');

    var record = new sighting({
        bird: args.bird,
        username: args.username,
        location: args.location,
        date: args.date
    });

    record.save(function (err, record){
        if (err) {
            console.error(err);
            return callback(err, null);
        }
        return callback(false, record);
    });
};
