# ECMAScript stubs

This repository contains stubs of the APIs defined in various ECMAScript
versions, that have been annotated with Closure compiler-compatible type
annotations and documentation extracted from the MDN.

The repository also contains the tool that has been used to extract the
documentation from the MDN and include it into the stubs.

These stubs are meant to be used in code editors that do support displaying
documentation of APIs, but lack a good documentation of the native ECMAScript
APIs (e.g. WebStorm 2016).

## Which files to use in editor

In you prefer undocumented stubs, these can be found in the `input` directory.
The `output` directory contains the stubs from the `input` directory enhanced
using the documentation that has been extracted from the MDN.

## Detailed licencing information

The code stubs and the type annotations in the docblocks, as well as the
documentation extraction tool, are unlicensed
([Public Domain](http://unlicense.org/)).

The documentation text are extracted from the MDN and governed by the
[CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/) license, while
the code examples are
[Public Domain](https://creativecommons.org/publicdomain/zero/1.0/).
