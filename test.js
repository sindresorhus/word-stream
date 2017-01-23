import test from 'ava';
import m from './';

test.cb(t => {
	m.on('data', function (word) {
		t.true(word.length > 1);
		this.pause();
		t.end();
	});
});
