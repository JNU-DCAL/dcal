// DCAL theme toggle — light default, choice persisted in localStorage.
// Initial theme is applied by a tiny inline snippet in each page's <head>
// (before paint) so there is no flash; this file only wires the toggle.
(function () {
  var KEY = 'dcal-theme';
  var root = document.documentElement;

  function current() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }
  function set(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(KEY, theme); } catch (e) {}
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('#themeToggle');
    if (!btn) return;
    set(current() === 'dark' ? 'light' : 'dark');
  });
})();
