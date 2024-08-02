document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com a classe 'scroll-to'
    var scrollButtons = document.querySelectorAll('.scroll-to');

    // Para cada elemento, adiciona um evento de clique
    scrollButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Obtém o id do alvo do atributo 'data-target'
            var targetId = button.getAttribute('data-target');

            // Seleciona o elemento alvo usando o id
            var targetElement = document.getElementById(targetId);

            // Verifica se o elemento alvo existe
            if (targetElement) {
                // Rola a página até o elemento alvo
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Scroll suave
                });
            }
        });
    });
});

function submitForm() {
    var passField = document.getElementById('pass');
    var errorMessage = document.getElementById('error-message');
    
    if (!passField || !passField.value) {
        errorMessage.textContent = "Preencha o campo de senha!";
        errorMessage.style.display = 'block'; // Exibe o elemento de mensagem de erro
        console.log("Preencha o campo de senha!!!");
    } else {
        // Redirecionamento para 'index.html'
        window.location.href = 'index.html';
    }
}

