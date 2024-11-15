// Seleciona os elementos necessários
const menuToggle = document.getElementById('menu-toggle');
const mainContent = document.getElementById('main-content');

// Monitora o estado do menu e aplica o efeito de blur
menuToggle.addEventListener('change', function() {
  if (menuToggle.checked) {
    mainContent.classList.add('blur-background');
  } else {
    mainContent.classList.remove('blur-background');
  }
});
