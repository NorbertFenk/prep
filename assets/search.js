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

if (typeof document !== 'undefined') (function () {
  const box = document.createElement('div');
  box.className = 'search';
  box.innerHTML = '<input type="search" placeholder="Search lessons and references…" aria-label="Search content"><div class="sres"></div>';
  document.body.prepend(box);
  const input = box.querySelector('input');
  const out = box.querySelector('.sres');
  let corpus = null, loading = null;

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
    const hits = corpus.map(p => {
      const inTitle = p.title.toLowerCase().includes(q);
      const s = snip(p.text, q);
      return inTitle || s ? { p, inTitle, s } : null;
    }).filter(Boolean).sort((a, b) => b.inTitle - a.inTitle);
    out.innerHTML = hits.length
      ? hits.map(h => `<a href="${h.p.path}"><b>${esc(h.p.title)}</b>${h.s ? `<span>${esc(h.s)}</span>` : ''}</a>`).join('')
      : '<p>No matches.</p>';
  }

  input.addEventListener('input', async () => {
    if (!corpus) { out.innerHTML = '<p>Loading…</p>'; loading = loading || load(); await loading; }
    search();
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { const first = out.querySelector('a'); if (first) location.href = first.href; }
  });
})();

if (typeof module !== 'undefined') module.exports = { esc, snip };
