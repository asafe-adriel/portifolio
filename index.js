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