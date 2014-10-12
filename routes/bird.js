/*jshint node: true*/

exports.find = function(req, res) {
    'use strict';
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');

    res.send('test');
};
