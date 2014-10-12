/*jshint node: true*/

var bird = module.exports;

bird.find = function (searchTerm, callback) {
    'use strict';

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/birdAlert');

    var db = mongoose.connection;
    db.on('error', function() {
        var error = new Error('Error connecting to database');
        console.log(error.message);
        return callback(error, null);
    });

    db.once('open', function() {
        console.log('Successfully connected to database');

        var birdSchema = mongoose.Schema({
            name: String
        });

        var bird = mongoose.model('Bird', birdSchema);

        var baldEagle = new bird({name: 'Bald Eagle'});

        baldEagle.save(function (err, baldEagle) {
            if (err) {
                return callback(err, null);
            }
        });

        bird.find({ name: '/^Bald/'}, function(err, birds) {
            if (err) {
                return callback(err, null);
            }
            return callback(false, birds);
        });
    });

    //return callback(false, true);
};
