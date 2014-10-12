#!/usr/bin/env node

/*jshint node: true */
/*global console*/

var express = require('express');
var bodyParser = require('body-parser');

var birdRoute = require('./routes/bird');

function initializeUnsecureAPI(config) {
    'use strict';

    var unsecureApp = express();

    unsecureApp.get('/birds/find', birdRoute.find);
    unsecureApp.use(bodyParser());

    var httpPort = config.api.httpPort;
    unsecureApp.listen(httpPort);
    console.log('Listening for HTTP on port ' + httpPort);
}

try {
    var config = require('jsconfig');
    var path = require('path');
    var defaultConfigPath = path.join(__dirname, 'config.default.js');
    var hotConfigPath = path.join(__dirname, 'config.js');

    config.defaults(defaultConfigPath);

    config.load(function() {
        'use strict';
        try {
            config.merge(hotConfigPath);
        } catch (err) {
            console.log('WARNING: Error reading config.js. ' +
                        'Please check configuration.');
            config.merge(defaultConfigPath);
        }
        console.log('Config: ', JSON.stringify(config, null, 2));

        initializeUnsecureAPI(config);
    });
} catch (err) {
    console.log(err.message);
    process.exit(1);
}
