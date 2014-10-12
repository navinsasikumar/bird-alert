/*jshint node: true*/

module.exports = {
    errorReturn: function(err) {
        'use strict';

        var errorJSON = {
            'Status': 'Error',
            'Message': err.message
        };

        return errorJSON;
    }
};
