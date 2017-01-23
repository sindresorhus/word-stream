# word-stream [![Build Status](https://travis-ci.org/sindresorhus/word-stream.svg?branch=master)](https://travis-ci.org/sindresorhus/word-stream)

> Returns a stream of English words from the [Letterpress Word List](https://github.com/atebits/Words/blob/master/Words/en.txt)

Useful if you're creating a word game or just want some words to work with.


## Install

```
$ npm install --save word-stream
```


## Usage

```js
const wordStream = require('word-stream');

wordStream.on('data', word => {
	console.log(word);
});
//=> …
//=> abmhos
//=> abnegate
//=> …
```


## Tip

You can get all the words at once by using [`get-stream`](https://github.com/sindresorhus/get-stream):

```js
const getStream = require('get-stream');
const wordStream = require('word-stream');

getStream.array(wordStream).then(words =>
	console.log(words);
	//=> […, 'abmhos', 'abnegate', …]
});
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
