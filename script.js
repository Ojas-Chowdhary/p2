function switchLanguage(language) {
    // Change the language of the page.
  }
  
  document.querySelector('nav a[href="#English"]').addEventListener('click', function() {
    switchLanguage('English');
  });
  
  document.querySelector('nav a[href="#Hindi"]').addEventListener('click', function() {
    switchLanguage('Hindi');
  });
  