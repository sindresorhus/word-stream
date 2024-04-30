import test from 'ava';
import {pEvent} from 'p-event';
import wordStream from './index.js';

test('main', async t => {
	const word = await pEvent(wordStream(), 'data');
	t.true(word.length > 1);
});
