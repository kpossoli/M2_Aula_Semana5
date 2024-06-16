document.addEventListener('DOMContentLoaded', () => {
    // Parte 1: Favoritar
    const favoritarBtn = document.getElementById('favoritar-btn');
    const favoritoStatus = document.getElementById('favorito-status');
    
    favoritarBtn.addEventListener('click', () => {
        favoritoStatus.textContent = 'Item adicionado à lista de favoritos!';
    });

    // Parte 2: Verificação de input
    const inputVerificacao = document.getElementById('input-verificacao');
    
    inputVerificacao.addEventListener('input', () => {
        if (inputVerificacao.value.length < 8) {
            inputVerificacao.classList.add('borda-vermelha');
        } else {
            inputVerificacao.classList.remove('borda-vermelha');
        }
    });
});
