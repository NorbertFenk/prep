document.querySelectorAll('.gauntlet').forEach(wrap => {
  const cards = [...wrap.querySelectorAll('.gcard')];
  const res = wrap.querySelector('.gres');
  const bar = wrap.querySelector('.gbar');
  const timeEl = wrap.querySelector('.gtime');
  const order = cards.map((c, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const tally = { solid: 0, shaky: 0, froze: 0 };
  const weak = new Map();
  let pos = 0, timer = null;

  function finish() {
    const total = order.length;
    const pct = Math.round(100 * tally.solid / total);
    let html = `Result: ${tally.solid}/${total} solid · ${tally.shaky} shaky · ${tally.froze} froze. `;
    html += (tally.froze === 0 && pct >= 80)
      ? `<b>Graduated.</b>`
      : 'Review the misses below, then run it again tomorrow.';
    for (const [href, label] of weak.values())
      html += `<br><a href="${href}">Review: ${label}</a>`;
    res.innerHTML = html;
  }

  function grade(g) {
    clearTimeout(timer);
    tally[g]++;
    const c = cards[order[pos]];
    if (g !== 'solid') {
      const key = c.dataset.cat + '|' + c.dataset.href;
      weak.set(key, [c.dataset.cat, c.dataset.href]);
    }
    pos++;
    show();
  }

  function show() {
    cards.forEach(c => c.classList.remove('on'));
    if (pos >= order.length) { finish(); return; }
    const c = cards[order[pos]];
    c.classList.add('on');
    const t = +c.dataset.time || 25;
    timeEl.style.height = '6px';
    bar.classList.remove('low');
    bar.style.transition = 'none';
    bar.style.width = '100%';
    void bar.offsetWidth;
    bar.style.transition = `width ${t}s linear`;
    bar.style.width = '0%';
    setTimeout(() => bar.classList.add('low'), t * 800);
    clearTimeout(timer);
    timer = setTimeout(() => grade('froze'), t * 1000);
  }

  wrap.querySelectorAll('[data-grade]').forEach(b =>
    b.addEventListener('click', () => grade(b.dataset.grade)));
  show();
});