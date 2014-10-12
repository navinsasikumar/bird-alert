/*jshint node: true*/

var mongoose = require('mongoose');

exports.connect = function(config) {
    'use strict';
    var dbURI = 'mongodb://' + config.db.host + '/' + config.db.database;

    //Create a database connection
    mongoose.connect(dbURI);

    //Connection events
    //Successful connection
    mongoose.connection.on('connected', function() {
        console.log('Mongoose default connetion open to ' + dbURI);
    });

    //If connection throws an error
    mongoose.connection.on('error', function (err) {
        console.log('Mongoose default connection error: ' + err);
    });

    mongoose.connection.on('disconnected', function() {
        console.log('Mongoose default connection disconnected');
    });

    //If the node process ends, close the mongoose connection
    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Mongoose default connection disconnected ' +
                        'through app termination');
            process.exit(0);
        });
    });

    var bird = require('./../model/bird');
    bird.loadSchema();
};

