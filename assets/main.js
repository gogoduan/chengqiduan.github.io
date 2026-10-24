document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.getElementById('menu-toggle');
const navigation = document.getElementById('navigation');
function closeMenu() { navigation.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open navigation'); }
toggle.addEventListener('click', () => { const open = navigation.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
async function copyEmail(button) {
  const label = button.querySelector('.email-text');
  try { await navigator.clipboard.writeText('duancq24@connect.hku.hk'); label.textContent = 'Email copied!'; }
  catch { label.textContent = 'duancq24@connect.hku.hk'; }
  setTimeout(() => { label.textContent = 'duancq24 [at] connect.hku.hk'; }, 2500);
}
// Citation counts are optional: avoid prolonged loading and API retry storms.
async function fetchCitations() {
  for (const element of document.querySelectorAll('.citation-count')) {
    try {
      const response = await fetch(`https://api.semanticscholar.org/graph/v1/paper/${element.dataset.paperId}?fields=citationCount`, {signal: AbortSignal.timeout(5000)});
      if (response.status === 429) break;
      if (response.ok) {
        const data = await response.json();
        if (Number.isInteger(data.citationCount)) { element.textContent = `Citations: ${data.citationCount}`; element.classList.remove('hidden'); }
      }
    } catch { break; }
    await new Promise(resolve => setTimeout(resolve, 1200));
  }
}
fetchCitations();

// Preserve normal image links as a no-JavaScript fallback.
const figureDialog = document.getElementById('figure-dialog');
const figureImage = document.getElementById('figure-image');
const figureTitle = document.getElementById('figure-title');
const figureOriginal = document.getElementById('figure-original');
document.querySelectorAll('[data-figure]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !figureDialog.showModal) return;
    event.preventDefault();
    figureImage.src = link.dataset.figure;
    figureImage.alt = `Overview of ${link.dataset.title}`;
    figureTitle.textContent = link.dataset.title;
    figureOriginal.href = link.dataset.figure;
    figureDialog.showModal();
  });
});
document.getElementById('close-figure').addEventListener('click', () => figureDialog.close());
figureDialog.addEventListener('click', event => { if (event.target === figureDialog) { const rect = figureDialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) figureDialog.close(); } });
