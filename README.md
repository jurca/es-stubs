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

## Notes about imperfections

I am aware, that a lot could be improved by defining the `Iterable`, `Iterator`
and other interfaces, however, WebStorm was having issues when I applied such
an approach. Because of this, some of these interface types have been inlined,
or replaced by similar structures for better compatibility with the editor.

So, no, don't worry, I realize that Iterable !== Iterator. :)

This may be fixed in the future once the support in WebStorm improves or I'll
find a suitable work-around for this.

## Detailed licencing information

The code stubs and the type annotations in the docblocks, as well as the
documentation extraction tool, are unlicensed
([Public Domain](http://unlicense.org/)).

The documentation text are extracted from the MDN and governed by the
[CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/) license, while
the code examples are
[Public Domain](https://creativecommons.org/publicdomain/zero/1.0/).
