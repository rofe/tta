((w) => {
  // wrap pictures with link to original
  w.addEventListener('DOMContentLoaded', () => {
    w.document.querySelectorAll('picture').forEach((pic) => {
      const link = document.createElement('a');
      link.href = pic.querySelector('img').src.split('?')[0];
      link.target = '_blank';
      pic.parentElement.insertBefore(link, pic);
      link.appendChild(pic);
    });
  });
})(window);

var nav = JSON.parse("https://tta--ghandke.hlx.page/table.json");