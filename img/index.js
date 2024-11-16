// Seleciona todos os botões de pergunta
const perguntaBtns = document.querySelectorAll('.pergunta-btn');

// Adiciona um evento de clique para cada botão de pergunta
perguntaBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Alterna o símbolo + para - e vice-versa
        const simbolo = btn.querySelector('.simbolo');
        const resposta = btn.nextElementSibling;

        if (resposta.style.display === "block") {
            resposta.style.display = "none";
            simbolo.textContent = "+";  // Alterna para +
        } else {
            resposta.style.display = "block";
            simbolo.textContent = "-";  // Alterna para -
        }
    });
});
