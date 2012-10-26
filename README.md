#Enverize

Replace string contents with ENVIRONMENT Variables. I use for dotfiles manager so the dotfiles can be installed to machines with a different HOME paths.

###Install

`npm install enverize`

###Usage

.env = {} // Defaults to process.env

.enverize(aStringToEnverize) // Returns String with ${ENVKEY} for example '/home/bencevans' would become '$HOME'

.parse(EnverizedString) // Swaps ENV Values back in.

###Examples

Look at the /test.js file.

###Licence

(The MIT Licence)

Copyright (c) 2012 Ben Evans <ben@bensbit.co.uk>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
