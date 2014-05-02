# stylus-initial

![NPM version](http://img.shields.io/npm/v/stylus-initial.svg) ![Build Status](http://img.shields.io/travis/leny/stylus-initial.svg) ![Dependency Status](https://david-dm.org/leny/stylus-initial.svg) ![Downloads counter](http://img.shields.io/npm/dm/stylus-initial.svg)

> [Stylus](http://learnboost.github.io/stylus/) plugin, polyfilling `initial` keyword.

* * *

### IMPORTANT NOTE

> For now, [a bug in nib](https://github.com/visionmedia/nib/pull/252) make stylus rendering fails when passing `initial` or `inherit` value to `opacity`.  
> Until the bug is fixed, be sure to pass a `1` value to `opacity` instead of `initial`.

* * *

## Installation

```
npm install stylus-initial
```

## Usage

Include **stylus-initial** in your stylus stylesheets with

```css
@import "stylus-initial"
```

Then, simply use the keyword `initial` in your stylus files.

```stylus
body
    width initial
```

Will results, in css : 

```stylus
body {
    width: auto;
}
```

All the initial values of css properties are stored in `lib/values.json`.  
Feel free to submit a Pull Request to complete/correct the list.

**Note:** when a property doesn't have an initial value in the specs, or when the initial value depends on user agents, the value will stay at `initial`.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.  
Add unit tests for any new or changed functionality.

## Release History

* Starting project (*23/04/14*)
* Initial release : v0.1.1 (*30/04/14*)

## License
(Un)licensed under the UNLICENSE
