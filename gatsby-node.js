require('ts-node').register({ files: true });

exports.createPages = require('./lib/createPages').default;

exports.onCreateNode = require('./lib/onCreateNode').default;

