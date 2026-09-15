// Catalog search: fetches every linked page on first query and matches in memory.
// ponytail: live-fetches ~500KB once per page load; swap for a prebuilt JSON index if the site outgrows that.
'use strict';

function esc(s) {
  return s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function snip(text, q) {
  const i = text.indexOf(q);
  if (i < 0) return '';
  return '…' + text.slice(Math.max(0, i - 40), i + q.length + 60).trim() + '…';
}

// Subsequence match for typos ("gorutine" -> goroutines). Returns gap count (lower = tighter) or -1.
// ponytail: subsequence, not edit distance — covers typos on a 500KB site; upgrade to Fuse.js if ranking feels off.
function fuzzy(text, q) {
  let i = 0, prev = -2, gaps = 0;
  for (let j = 0; j < text.length && i < q.length; j++) {
    if (text[j] === q[i]) {
      if (i > 0 && j !== prev + 1) gaps++;
      prev = j; i++;
    }
  }
  return i === q.length ? gaps : -1;
}

if (typeof document !== 'undefined') (function () {
  const box = document.createElement('div');
  box.className = 'search';
  box.innerHTML = '<input type="search" placeholder="Search lessons and references… (Ctrl+K)" aria-label="Search content"><div class="sres"></div>';
  document.body.prepend(box);
  const input = box.querySelector('input');
  const out = box.querySelector('.sres');
  let corpus = null, loading = null, active = -1;

  async function load() {
    corpus = (await Promise.all([...document.querySelectorAll('a[href$=".html"]')].map(async a => {
      try {
        const html = await (await fetch(a.href)).text();
        const body = new DOMParser().parseFromString(html, 'text/html').body;
        return { title: a.textContent.trim(), path: a.getAttribute('href'), text: body.textContent.replace(/\s+/g, ' ').toLowerCase() };
      } catch { return null; }
    }))).filter(Boolean);
  }

  function search() {
    const q = input.value.trim().toLowerCase();
    if (!q) { out.innerHTML = ''; return; }
    const useFuzzy = q.length >= 3;
    const hits = corpus.map(p => {
      const tl = p.title.toLowerCase();
      let s = snip(p.text, q), rank, gaps = 0;
      if (tl.includes(q)) rank = 0;
      else if (s) rank = 1;
      else if (useFuzzy && (gaps = fuzzy(tl, q)) >= 0) rank = 2;
      else if (useFuzzy && fuzzy(p.text, q) >= 0) { rank = 3; s = ''; }
      else return null;
      return { p, rank, gaps, s };
    }).filter(Boolean).sort((a, b) => a.rank - b.rank || a.gaps - b.gaps);
    out.innerHTML = hits.length
      ? hits.map(h => `<a href="${h.p.path}"><b>${esc(h.p.title)}</b>${h.s ? `<span>${esc(h.s)}</span>` : ''}</a>`).join('')
      : '<p>No matches.</p>';
    active = -1;
  }

  function move(d) {
    const links = out.querySelectorAll('a');
    if (!links.length) return;
    if (active >= 0) links[active].classList.remove('on');
    active = active < 0 ? (d > 0 ? 0 : links.length - 1) : (active + d + links.length) % links.length;
    links[active].classList.add('on');
    links[active].scrollIntoView({ block: 'nearest' });
  }

  input.addEventListener('input', async () => {
    if (!corpus) { out.innerHTML = '<p>Loading…</p>'; loading = loading || load(); await loading; }
    search();
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); move(1); return; }
    if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); return; }
    if (e.key === 'Enter') {
      const links = out.querySelectorAll('a');
      const el = active >= 0 ? links[active] : links[0];
      if (el) location.href = el.href;
    }
  });
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); input.focus(); input.select(); }
    else if (e.key === 'Escape') { input.value = ''; out.innerHTML = ''; active = -1; input.blur(); }
  });
})();

if (typeof module !== 'undefined') module.exports = { esc, snip, fuzzy };
