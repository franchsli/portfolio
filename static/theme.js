function darkTheme () {
    const html = document.querySelector('html')
    html.dataset.bsTheme = 'dark'
    localStorage.setItem('theme', 'dark')
    const themeIcon = document.getElementById('theme-icon')
    themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill')
}

function lightTheme(){
    const html = document.querySelector('html')
    html.dataset.bsTheme = 'light'
    localStorage.setItem('theme', 'light')
    const themeIcon = document.getElementById('theme-icon')
    themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill')
}

function loadActualTheme(){
    if (localStorage.getItem('theme') === 'light') {
        lightTheme()
    }
    else {
        darkTheme()
    }
}

function switchTheme(){
    if(localStorage.getItem('theme') === 'light'){
        darkTheme()
    }
    else{
        lightTheme()
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadActualTheme()
    const themeToggler = document.getElementById('theme-toggler')
    themeToggler.onclick = () => {
        switchTheme()
    }
})