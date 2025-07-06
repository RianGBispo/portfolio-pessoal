// Menu responsivo
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Rolagem suave para âncoras
const links = document.querySelectorAll('.nav-links a');
for (let link of links) {
    link.addEventListener('click', function (e) {
        // Se for âncora interna
        if (this.hash && document.querySelector(this.hash)) {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({
                behavior: 'smooth'
            });
            navLinks.classList.remove('active');
        }
    });
}

// Filtro de projetos
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove classe active de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Adiciona classe active ao botão clicado
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease-in';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Animação nos cards de projeto (efeito já no CSS, mas reforço JS para exemplo)
const cards = document.querySelectorAll('.project-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 8px 24px rgba(0,191,174,0.25)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '';
    });
});

// Validação do formulário de contato
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;
        // Limpa mensagens
        document.getElementById('nomeError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('mensagemError').textContent = '';
        document.getElementById('formSuccess').textContent = '';

        // Nome
        const nome = document.getElementById('nome').value.trim();
        if (nome.length < 2) {
            document.getElementById('nomeError').textContent = 'Digite seu nome completo.';
            valid = false;
        }
        // Email
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('emailError').textContent = 'Digite um e-mail válido.';
            valid = false;
        }
        // Mensagem
        const mensagem = document.getElementById('mensagem').value.trim();
        if (mensagem.length < 5) {
            document.getElementById('mensagemError').textContent = 'Digite uma mensagem mais detalhada.';
            valid = false;
        }
        if (valid) {
            document.getElementById('formSuccess').textContent = 'Mensagem enviada com sucesso!';
            form.reset();
        }
    });
} 