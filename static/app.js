document.addEventListener('DOMContentLoaded', () => {
    const navbar_items = document.querySelectorAll('#navbarContent ul li')
    navbar_items.forEach((item) => {
        item.onmouseenter = () => {
            item.style.color = 'red'
        }
    })
})