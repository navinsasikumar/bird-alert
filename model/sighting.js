var mongoose = require('mongoose');
var schema = mongoose.Schema;

exports.loadSchema = function() {
    'use strict';

    var sightingSchema = mongoose.Schema({
        bird: {type: schema.ObjectId, ref: 'Bird'},
        username: String,
        location: String,
        date: {type: Date, default: Date.now}
    });

    mongoose.model('Sighting', sightingSchema);
};
