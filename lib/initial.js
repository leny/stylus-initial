/*!
 * stylus-initial
 * Copyright (c) 2014 Pierre-Antoine "Leny" Delnatte <info@flatland.be>
 * (Un)Licensed
 */

"use strict";

var utils = require( "stylus" ).utils,
    rInitial = /([a-z\-]+)\s*:\s*(initial);/gi,
    oInitialValues = require( "./values.json" );

var plugin = function() {
    return function( stylus ) {
        stylus.on( "end", function( err, css ) {
            return css.replace( rInitial, function( sRule, sProperty ) {
                var mInitialValue;
                if( ( mInitialValue = oInitialValues[ sProperty ] ) != null ) {
                    return sProperty + ": " + mInitialValue + ";";
                }
                return sRule;
            } );
        } );
    };
};

module.exports = plugin;

module.exports.version = require( "../package.json" ).version;
