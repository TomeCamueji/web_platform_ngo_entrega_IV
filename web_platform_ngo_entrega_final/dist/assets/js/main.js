// assets/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Lógica para alternar o modo de alto contraste (Acessibilidade WCAG)
    const highContrastKey = 'highContrastMode';
    const body = document.body;

    function toggleHighContrast() {
        body.classList.toggle('high-contrast');
        const isHighContrast = body.classList.contains('high-contrast');
        localStorage.setItem(highContrastKey, isHighContrast ? 'enabled' : 'disabled');
    }

    // Verifica o estado no localStorage ao carregar a página
    if (localStorage.getItem(highContrastKey) === 'enabled') {
        body.classList.add('high-contrast');
    }

    // Atalho de teclado: Ctrl + H (ou Cmd + H no Mac)
    document.addEventListener('keydown', (event) => {
        // Verifica se Ctrl (ou Cmd no Mac) e H foram pressionados
        if (event.ctrlKey && event.key === 'h') {
            event.preventDefault();
            toggleHighContrast();
        }
    });

    // 1. Inicializa o Menu Hambúrguer (Manipulação do DOM)
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('#main-menu'); // Usando o ID adicionado para ser mais específico

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = navUl.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Adiciona/Remove atributo ARIA para acessibilidade
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // 2. Inicializa a Validação de Formulário na página de cadastro
    const form = document.querySelector('#formulario-voluntario form');
    if (form) {
        form.addEventListener('submit', function(event) {
            // Previne o envio padrão para fazer a validação primeiro
            event.preventDefault();

            let isValid = true;
            let firstInvalidField = null;

            // Seleciona todos os inputs e selects que precisam de validação
            const fieldsToValidate = form.querySelectorAll('input[required], select[required]');

            // Remove mensagens de erro antigas e aria-invalid
            form.querySelectorAll('.error-message').forEach(msg => msg.remove());
            fieldsToValidate.forEach(field => field.removeAttribute('aria-invalid'));

            fieldsToValidate.forEach(field => {
                const isFieldValid = field.checkValidity();
                if (!isFieldValid) {
                    isValid = false;
                    field.setAttribute('aria-invalid', 'true');
                    if (!firstInvalidField) {
                        firstInvalidField = field;
                    }

                    // Cria e exibe a mensagem de erro
                    const errorMessage = document.createElement('p');
                    errorMessage.className = 'error-message';
                    errorMessage.setAttribute('role', 'alert'); // Importante para leitores de tela
                    errorMessage.textContent = field.validationMessage || 'Este campo é obrigatório.';
                    field.parentElement.appendChild(errorMessage);
                }
            });

            if (isValid) {
                // Se tudo for válido, pode-se prosseguir com o envio
                alert('Cadastro enviado com sucesso! (Simulação)');
                form.reset(); // Limpa o formulário
            } else {
                // Foca no primeiro campo inválido para melhor acessibilidade
                if(firstInvalidField) {
                    firstInvalidField.focus();
                }
            }
        });
    }
});

