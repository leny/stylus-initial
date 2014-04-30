/*!
 * stylus-initial
 * Copyright (c) 2014 Pierre-Antoine "Leny" Delnatte <info@flatland.be>
 * (Un)Licensed
 */

"use strict";

var utils = require( "stylus" ).utils,
    rVendor = /^-(?:webkit|moz|ms|o)-(.+)$/i,
    oInitialValues = require( "./values.json" );

var plugin = function() {
    return function() {
        var oEvaluator = this.evaluator,
            nodes = this.nodes,
            _fVisitProperty = oEvaluator.visitProperty;

        oEvaluator.visitProperty = function( oNode ) {
            var oCurrentValue, mInitialValue, oInitialValueNode, sProperty, aVendorMatch;
            _fVisitProperty.call( oEvaluator, oNode );
            if( oNode.nodeName !== "property" || oNode.expr.isList || ( oCurrentValue = oNode.expr.first ).nodeName !== "ident" || oCurrentValue.string !== "initial" ) {
                return oNode;
            }
            if( aVendorMatch = ( sProperty = oNode.name ).match( rVendor ) ) {
                sProperty = aVendorMatch[ 1 ];
            }
            if( ( mInitialValue = oInitialValues[ sProperty ] ) != null ) {
                oInitialValueNode = utils.coerce( mInitialValue );
                if( oInitialValueNode.nodeName === "string" && mInitialValue.indexOf( "'" ) === -1 && mInitialValue.indexOf( '"' ) === -1 ) {
                    oInitialValueNode = new nodes.Literal( mInitialValue );
                }
                oNode.expr = oInitialValueNode;
            }
            return oNode;
        };
    };
};

module.exports = plugin;

module.exports.version = require( "../package.json" ).version;
