//alternar entre modo claro e escuro - tambem muda as logos agora 
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const logoHeader = document.getElementById('logoHeader');
const logoSobre = document.getElementById('logoSobre');

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-bs-theme', newTheme);

    //ataulizar o icone 
    themeToggle.innerHTML = newTheme === 'dark'
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';

    //atualizar as logos
    if (newTheme === 'dark') {
        logoHeader.src = 'imagens/Logo_SportsWear-removebg-preview.png';
        logoSobre.src = 'imagens/Logo_SportsWear-removebg-preview.png';
    }
    else {
        logoHeader.src = 'imagens/Logo_SportsWear_light-removebg-preview.png';
        logoSobre.src = 'imagens/Logo_SportsWear_light-removebg-preview.png';
    }
});