// Adiciona um evento de clique nos botões de incrementar e decrementar
document.querySelectorAll('.contador button').forEach(button => {
    button.addEventListener('click', () => {
        const quantidadeSpan = button.parentElement.querySelector('span');
        let quantidade = parseInt(quantidadeSpan.textContent);

        // Se o botão clicado for o de incrementar, aumenta a quantidade
        if (button.id === 'incrementar') {
            quantidade++;
        }
        // Se o botão clicado for o de decrementar e a quantidade for maior que 0, diminui a quantidade
        else if (button.id === 'decrementar' && quantidade > 0) {
            quantidade--;
        }

        // Atualiza o valor do contador na página
        quantidadeSpan.textContent = quantidade;
        // Calcula o preço total

        const preco = quantidade * 3.99;

// Atualiza o preço total na página
button.parentElement.nextElementSibling.textContent = `R$ ${preco.toFixed(2)}`;
    });
});