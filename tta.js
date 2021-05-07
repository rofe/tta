(() => {
  // wrap all imgs with links to original
  document.querySelectorAll('picture').forEach((img) => {
    const link = document.createElement('a');
    link.href = img.src.split('?')[0];
    img.parentElement.insertBefore(link, img);
    link.appendChild(img);
  });
})();
