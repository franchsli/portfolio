function dark_theme () {
    const html = document.querySelector('html')
    html.dataset.bsTheme = 'dark'
    localStorage.setItem('theme', 'dark')
    const theme_icon = document.getElementById('theme-icon')
    theme_icon.classList.replace('bi-moon-fill', 'bi-sun-fill')
}

function light_theme(){
    const html = document.querySelector('html')
    html.dataset.bsTheme = 'light'
    localStorage.setItem('theme', 'light')
    const theme_icon = document.getElementById('theme-icon')
    theme_icon.classList.replace('bi-sun-fill', 'bi-moon-fill')
}

function load_actual_theme(){
    if (localStorage.getItem('theme') === 'light') {
        light_theme()
    }
    else {
        dark_theme()
    }
}

function switch_theme(){
    if(localStorage.getItem('theme') === 'light'){
        dark_theme()
    }
    else{
        light_theme()
    }
}

document.addEventListener('DOMContentLoaded', () => {
    load_actual_theme()
    const theme_toggler = document.getElementById('theme-toggler')
    theme_toggler.onclick = () => {
        switch_theme()
    }
})