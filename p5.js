function setProgress(id, percent) {
    const fill = document.getElementById(id);
    if (fill) {
      fill.style.width = percent + '%';
    }
  }
  
  function initializeProgress() {
    setProgress('js-progress', 70);
    setProgress('html-css-progress', 50);
  }
  
