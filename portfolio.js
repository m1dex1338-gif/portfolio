const mobileMenu = document.getElementById('mobileMenu');
const openBtn = document.getElementById('openMenuBtn');
const closeBtn = document.getElementById('closeMenuBtn');

openBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});


const themeToggles = document.querySelectorAll('.theme-toggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    updateThemeIcons(true);
}

themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        
        const isDark = document.body.classList.contains('dark');
        
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        updateThemeIcons(isDark);
    });
});

function updateThemeIcons(isDark) {
    themeToggles.forEach(toggle => {
        toggle.innerHTML = isDark ? '☾' : '☼'; 
    });
}