import fs from 'node:fs';
import binarySlit from 'binary-split';
import wordListPath from 'word-list';

export default function wordStream() {
	return fs.createReadStream(wordListPath).pipe(binarySlit());
}
