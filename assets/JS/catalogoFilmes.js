const carousel = document.querySelector('.carousel-content');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const visibleItems = 4; // Apenas 4 itens visíveis por vez
const items = [...document.querySelectorAll('.carousel-item')];
const totalItems = items.length;
const itemWidth = items[0].offsetWidth + 10; // Largura do item + margem
let currentIndex = 0;

// 🔹 Clonar os primeiros 4 itens e adicionar ao final para criar o looping suave
const clones = items.slice(0, visibleItems).map(item => item.cloneNode(true));
clones.forEach(clone => carousel.appendChild(clone));

// 🔹 Ajustar a largura total do carrossel
carousel.style.width = `${(totalItems + visibleItems) * itemWidth}px`;

// 🔹 Função para atualizar a posição do carrossel
function updateCarousel(instant = false) {
    carousel.style.transition = instant ? "none" : "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

// 🔹 Avançar para a próxima faixa de 4 caixas
nextBtn.addEventListener('click', () => {
    currentIndex += visibleItems;

    if (currentIndex >= totalItems) {
        setTimeout(() => {
            carousel.style.transition = "none"; // Remove a animação temporariamente
            currentIndex = 0; // Retorna ao início suavemente
            updateCarousel(true);
        }, 500); // Tempo da animação
    }

    updateCarousel();
});

// 🔹 Retroceder para a faixa anterior de 4 caixas
prevBtn.addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = totalItems; // Pula para o final antes de retroceder
        updateCarousel(true);
    }
    currentIndex -= visibleItems;
    updateCarousel();
});

// 🔹 Garantir que o carrossel inicie corretamente
updateCarousel();
