let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.depoimentos__card');
    const indicators = document.querySelectorAll('.dot span');

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 52; // Ajuste o valor de acordo com o tamanho do slide
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    // Atualiza o indicador ativo
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Inicia o carrossel automático
setInterval(() => {
    nextSlide();
}, 7000); // Troca a cada 7 segundos

showSlide(currentSlide);

// Adiciona funcionalidade de clique aos indicadores
document.querySelectorAll('.carousel-indicators span').forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
    });
});
