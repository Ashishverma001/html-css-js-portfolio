function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Function to handle theme toggling
function handleThemeToggle() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const nav = document.querySelector('nav');
    const menuToggleButton = document.querySelector(".hamburger-icon");
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        nav.classList.add('dark-mode');
        themeToggleButton.classList.add('dark-mode');
        menuToggleButton.classList.add('dark-mode');
        themeToggleButton.textContent = '☀️';
    }

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        nav.classList.toggle('dark-mode');
        themeToggleButton.classList.toggle('dark-mode');
        menuToggleButton.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        themeToggleButton.textContent = isDarkMode ? '☀️' : '🌙';
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
}


document.addEventListener("DOMContentLoaded", () => {
    handleThemeToggle();

    const menuToggleButton = document.querySelector(".hamburger-icon");
    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', togglemenu);
    }
});