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
        var oEvaluator = this.evaluator,
            nodes = this.nodes,
            _fVisitProperty = oEvaluator.visitProperty;

        oEvaluator.visitProperty = function( oNode ) {
            var oCurrentValue, mInitialValue, oInitialValueNode;
            _fVisitProperty.call( oEvaluator, oNode );
            if( oNode.nodeName !== "property" || oNode.expr.isList || ( oCurrentValue = oNode.expr.first ).nodeName !== "ident" || oCurrentValue.string !== "initial" ) {
                return oNode;
            }
            if( ( mInitialValue = oInitialValues[ oNode.name ] ) != null ) {
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
