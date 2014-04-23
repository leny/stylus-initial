// stylus-initial for Stylus : unit tests
// Inspired from the Stylus unit tests

// Module dependencies.

var stylus = require( "stylus" ),
    fs = require( "fs" );

// test cases

var cases = fs.readdirSync( "test/fixtures" ).filter( function( file ) {
        return ~file.indexOf( ".styl" );
    } ).map( function( file ) {
        return file.replace( ".styl", "" );
    } );

describe( "stylus-initial test cases", function() {
    cases.forEach( function( test ) {
        var name = test.replace( /[-.]/g, " " );

        if( "index" == name ) {
            return;
        }

        it( name, function() {
            var path = "test/fixtures/" + test + ".styl";
            var styl = fs.readFileSync( path, "utf8" ).replace( /\r/g, "" );
            var css = fs.readFileSync( "test/expected/" + test + ".css", "utf8" ).replace( /\r/g, "" ).trim();

            var style = stylus( styl ).set( "filename", path );

            style.render( function( err, actual ) {
                if( err ) {
                    throw err;
                }
                actual.trim().should.equal( css );
            } );
        } );
    } );
} );
