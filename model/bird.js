var mongoose = require('mongoose');

exports.loadSchema = function() {
    'use strict';

    var birdSchema = mongoose.Schema({
        commonName: String,
        scientificName: String
    });

    mongoose.model('Bird', birdSchema);
};
