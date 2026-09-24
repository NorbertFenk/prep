// Theme: follow the OS by default, with a manual override saved in localStorage.
(function () {
  var root = document.documentElement;
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  function saved() { try { return localStorage.getItem('theme'); } catch (e) { return null; } }
  function apply(t) { root.dataset.theme = t; }
  apply(saved() || (mq.matches ? 'dark' : 'light'));
  (mq.addEventListener ? mq.addEventListener.bind(mq) : mq.addListener.bind(mq))('change', function () { if (!saved()) apply(mq.matches ? 'dark' : 'light'); });
  function ready(fn) { document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn) : fn(); }
  ready(function () {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'theme-toggle';
    function label() {
      var dark = root.dataset.theme === 'dark';
      b.textContent = dark ? 'Light mode' : 'Dark mode';
      b.setAttribute('aria-label', 'Switch to ' + (dark ? 'light' : 'dark') + ' mode');
    }
    label();
    b.addEventListener('click', function () {
      var t = root.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(t);
      try { localStorage.setItem('theme', t); } catch (e) {}
      label();
    });
    document.body.appendChild(b);
  });
})();
