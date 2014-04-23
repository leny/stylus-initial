/*!
 * stylus-initial
 * Copyright (c) 2014 Pierre-Antoine "Leny" Delnatte <info@flatland.be>
 * (Un)Licensed
 */

var stylus = require( "stylus" ),
    path = require( "path" ),
    utils = stylus.utils,
    plugin;

exports = module.exports = plugin = function() {
    return function( style ){
        // so many things to do here...
    };
};

exports.version = require( path.join( __dirname, "../package.json" ) ).version;

exports.path = __dirname;

