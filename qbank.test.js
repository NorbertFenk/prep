const assert = require('assert');
const { parse, fmt } = require('./assets/qbank.js');

const md = '## Go Lang\n\nSource: <https://example.com/x>\n\n' +
  '### Q: What is Go?\nA: A compiled language.\n\n' +
  '### Q: What about `fmt`?\nA: It formats, e.g. `fmt.Println`.\n';
const r = parse(md);
assert.strictEqual(r.title, 'Go Lang');
assert.strictEqual(r.src, '<https://example.com/x>');
assert.strictEqual(r.items.length, 2);
assert.strictEqual(r.items[0].q, 'What is Go?');
assert.strictEqual(r.items[0].a, 'A compiled language.');
assert.strictEqual(r.items[1].q, 'What about `fmt`?');
assert(r.items[1].a.endsWith('`fmt.Println`.'));
assert.strictEqual(parse('## Bare\n\n### Q: x\nA: y\n').items.length, 1);
assert.strictEqual(fmt('<a> & `b`'), '&lt;a&gt; &amp; <code>b</code>');
console.log('qbank.test OK');
