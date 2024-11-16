// Função para os botões de pergunta
const perguntaBtns = document.querySelectorAll('.pergunta-btn');

// Adiciona um evento de clique para cada botão de pergunta
perguntaBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Alterna o símbolo + para - e vice-versa
        const simbolo = btn.querySelector('.simbolo');
        const resposta = btn.nextElementSibling;

        if (resposta.style.display === "block") {
            resposta.style.display = "none";
            simbolo.textContent = "+"; // Alterna para +
        } else {
            resposta.style.display = "block";
            simbolo.textContent = "-"; // Alterna para -
        }
    });
});


// Ativa o menu ao clicar no botão
const menuButton = document.getElementById('menuButton');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    // Alterna a classe 'active' no menu
    navLinks.classList.toggle('active');
    
    // Alterna a classe 'active' no botão de menu para trocar o ícone
    menuButton.classList.toggle('active');
    
    // Alterna entre o ícone de hambúrguer e o "X"
    if (navLinks.classList.contains('active')) {
        menuButton.innerHTML = '&#10005;'; // Mostra o "X" (fechar)
    } else {
        menuButton.innerHTML = '&#9776;'; // Mostra o ícone de hambúrguer
    }
});


