# word-stream [![Build Status](https://travis-ci.org/sindresorhus/word-stream.png?branch=master)](http://travis-ci.org/sindresorhus/word-stream)

> Returns a stream of English words from the [Letterpress Word List](https://github.com/atebits/Words/blob/master/Words/en.txt)

Useful if you're creating a word game or just want some words to work with.


## Install

```
npm install --save word-stream
```


## Example

```js
var wordStream = require('word-stream');

wordStream.on('data', function (word) {
	console.log(word);
});
//=> ...
//=> abmhos
//=> abnegate
//=> ...
```

You can get all the words at once by using [stream-to-array](https://github.com/stream-utils/stream-to-array):

```js
var toArray = require('stream-to-array');
var wordStream = require('word-stream');

toArray(wordStream, function (wordArray) {
	console.log(wordArray);
	//=> [..., 'abmhos', 'abnegate', ...]
});
```


## CLI

You can also use it as a CLI app by installing it globally:

```
npm install --global word-stream
```

### Usage

```
❯ word-stream -h

word-stream
or
word-stream > <output file>
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
