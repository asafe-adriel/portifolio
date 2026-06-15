document.addEventListener("DOMContentLoaded", () => {
    console.log("Trainer Card carregado com sucesso!");
    
    // Exemplo: Destacar os cards de projeto ao passar o mouse
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = '#DC5339'; // Muda para vermelho
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = '#DCA142'; // Volta para o amarelo original
        });
    });
});

// Funções para gerenciar modais
function openModal(modalId) {
    event.preventDefault();
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(event) {
    // Se um evento foi passado, verifica se foi clicado fora do modal
    if (event && event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    } else if (!event) {
        // Se nenhum evento foi passado, encontra o modal pai e fecha
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            modal.classList.remove('active');
        });
    }
}