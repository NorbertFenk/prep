// Question bank: fetches the markdown files in question-bank/ and renders each
// Q/A as a native <details> flashcard. Format is fixed (## title, optional
// "Source:", "### Q:" + "A:"), so no markdown parser is needed.
// ponytail: runtime fetch+parse keeps the .md the single source of truth; prerender to HTML if first paint ever matters.
'use strict';

const QFILES = [
  'go', 'python', 'sql', 'git',
  'api-and-backend', 'computer-science-fundamentals', 'coding-problems',
];

const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmt = s => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>');
const linkify = s => {
  const m = s.match(/^<(.+)>$/);
  return m ? `<a href="${esc(m[1])}" rel="noreferrer">${esc(m[1])}</a>` : fmt(s);
};

function parse(md) {
  const title = md.split('\n')[0].replace(/^##\s*/, '').trim();
  const src = (md.match(/^Source:\s*(.+)$/m) || [])[1];
  const items = md.split(/^### Q:\s*/m).slice(1).map(block => {
    const nl = block.indexOf('\n');
    return {
      q: block.slice(0, nl).trim(),
      a: block.slice(nl).replace(/^\s*A:\s*/m, '').trim(),
    };
  });
  return { title, src, items };
}

if (typeof document !== 'undefined') (async function () {
  const bank = document.getElementById('bank');
  const nav = document.getElementById('qnav');
  bank.innerHTML = '';
  let total = 0, loaded = 0;

  for (const name of QFILES) {
    let md;
    try {
      md = await (await fetch(name + '.md')).text();
    } catch {
      continue;
    }
    const { title, src, items } = parse(md);
    const cards = items.map(({ q, a }) =>
      `<details class="card"><summary>${fmt(q)}</summary><p>${fmt(a)}</p></details>`).join('');

    total += items.length; loaded++;
    nav.insertAdjacentHTML('beforeend', `<li><a href="#${name}">${esc(title)}</a></li>`);
    bank.insertAdjacentHTML('beforeend',
      `<h2 id="${name}">${esc(title)} <span class="aka">${items.length} questions</span></h2>` +
      (src ? `<p class="meta">Source: ${linkify(src)}</p>` : '') +
      cards);
  }

  if (!loaded) {
    bank.innerHTML = '<p class="meta">Could not load the question bank — serve the site over HTTP, not <code>file://</code>.</p>';
  } else {
    bank.insertAdjacentHTML('afterbegin', `<p class="meta">${total} questions across ${loaded} topics.</p>`);
  }
})();

if (typeof module !== 'undefined') module.exports = { parse, esc, fmt };
