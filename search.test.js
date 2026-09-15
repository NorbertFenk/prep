const assert = require('assert');
const { esc, snip, fuzzy } = require('./assets/search.js');

assert.strictEqual(esc('<a & "b">'), '&lt;a &amp; &quot;b&quot;&gt;');
assert.strictEqual(snip('hello world', 'nope'), '');
assert.strictEqual(snip('hello world', 'hello'), '…hello world…');
const long = 'x'.repeat(100) + 'needle' + 'y'.repeat(100);
const s = snip(long, 'needle');
assert(s.includes('needle') && s.startsWith('…') && s.endsWith('…') && s.length < 115);
assert.strictEqual(fuzzy('goroutines', 'gorutine'), 1);   // typo still matches, 1 gap
assert.strictEqual(fuzzy('goroutines', 'goroutines'), 0); // exact = no gaps
assert.strictEqual(fuzzy('dns', 'tcp'), -1);              // no match
assert(fuzzy('ab', 'abc') === -1);
console.log('search.test OK');
