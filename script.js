window.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggleTheme');

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    if (document.body.classList.contains('light')) {
      toggle.textContent = '☀️';
    } else {
      toggle.textContent = '🌙';
    }
  });

  // botão que abre seu site no clique
  const btn = document.querySelector('button:not(#toggleTheme)');
  btn.addEventListener('click', () => {
    window.open('https://sites.google.com/view/s0dasportfolio/portfolio/', '_blank');
  });
});
